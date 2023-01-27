import config, { plugins } from './rollup.config.common.js';

const filename = 'index';
const dir = 'dist';
const globals = {};
const name = 'ReactDataTable';

export default Object.assign(config, {
  output: [
    {
      dir,
      entryFileNames: `${filename}.dev.js`,
      format: 'cjs',
    },
    {
      dir,
      entryFileNames: `${filename}.dev.[format].js`,
      format: 'esm',
    },
    {
      dir,
      entryFileNames: `${filename}.dev.[format].js`,
      format: 'umd',
      name,
      globals,
    },
  ],
  plugins: plugins.concat([
    // add additional pluggins here
  ]),
});