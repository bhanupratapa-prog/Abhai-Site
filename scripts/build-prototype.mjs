import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'site-dist');
const manifest = JSON.parse(readFileSync(resolve(root, '_prototype_media/manifest.json'), 'utf8'));
const internal = new Set(['site-dist', '_prototype_media', 'scripts', 'node_modules', 'vercel.json', 'README.md', 'package.json', 'package-lock.json']);
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const entry of readdirSync(root, { withFileTypes: true })) {
  if (!entry.name.startsWith('.') && !internal.has(entry.name)) {
    cpSync(resolve(root, entry.name), resolve(output, entry.name), { recursive: true });
  }
}
for (const asset of manifest.assets) {
  const data = Buffer.concat(asset.parts.map(part => readFileSync(resolve(root, part))));
  const digest = createHash('sha256').update(data).digest('hex');
  if (data.length !== asset.bytes || digest !== asset.sha256) {
    throw new Error(`Media integrity check failed: ${asset.path}`);
  }
  const destination = resolve(output, asset.path);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, data);
  console.log(`Verified ${asset.path}: ${data.length} bytes`);
}
console.log('Static website built in site-dist');
