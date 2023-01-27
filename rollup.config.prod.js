import terser from '@rollup/plugin-terser';
import config, { plugins } from './rollup.config.common.js';

const filename = 'index';
const dir = 'dist';
const globals = {};
const name = 'ReactDataTable';

export default Object.assign(config, {
  output: [
    {
      dir,
      entryFileNames: `${filename}.prod.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir,
      entryFileNames: `${filename}.prod.min.js`,
      format: 'cjs',
      plugins: [terser()],
    },
    {
      dir,
      entryFileNames: `${filename}.prod.[format].js`,
      format: 'esm',
    },
    {
      dir,
      entryFileNames: `${filename}.prod.[format].min.js`,
      format: 'esm',
      plugins: [terser()],
    },
    {
      dir,
      entryFileNames: `${filename}.prod.[format].js`,
      format: 'umd',
      name,
      globals,
    },
    {
      dir,
      entryFileNames: `${filename}.prod.[format].min.js`,
      format: 'umd',
      name,
      globals,
      plugins: [terser()],
    },
  ],
  plugins: plugins.concat([]),
});
