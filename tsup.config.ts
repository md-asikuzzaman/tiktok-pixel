import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: './dist',
  outExtension: ({ format }) => {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
    };
  },
  dts: true,
  sourcemap: true,
  // minify: true,
  clean: true,

  target: 'es2022',
  platform: 'browser',
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.define = {
      ...(options.define ?? {}),
      'process.env.NODE_ENV': JSON.stringify(
        watch ? 'development' : 'production',
      ),
    };
  },
}));
