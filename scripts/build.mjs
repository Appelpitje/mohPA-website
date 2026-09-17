import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { build } from 'vite';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const { values } = parseArgs({
  options: { mode: { type: 'string', default: 'production' } },
});
// Both bundles use the same production environment and Vite mode/env files.
process.env.NODE_ENV = 'production';
const config = { root, mode: values.mode };
const temporaryDirectory = await mkdtemp(join(root, '.prerender-'));

try {
  await build(config);
  await build({
    ...config,
    publicDir: false,
    build: {
      ssr: join(root, 'src/entry-server.tsx'),
      outDir: temporaryDirectory,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });

  const { render } = await import(pathToFileURL(join(temporaryDirectory, 'entry-server.mjs')).href);
  const markup = render();
  if (typeof markup !== 'string' || !markup.trim()) {
    throw new Error('Prerender returned no HTML.');
  }

  const outputPath = join(root, 'dist/index.html');
  const html = await readFile(outputPath, 'utf8');
  const mount = '<div id="root"></div>';
  if (html.split(mount).length !== 2) {
    throw new Error('Expected exactly one empty React root in the built HTML.');
  }
  // Modify only the mount: retain Vite asset hashes and authored head metadata.
  await writeFile(outputPath, html.replace(mount, () => `<div id="root">${markup}</div>`));
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
