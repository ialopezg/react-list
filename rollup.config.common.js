import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';

const production = !process.env.ROLLUP_WATCH;

export const plugins = [
  scss({
    fileName: 'dist/styles.css',
  }),
  nodeResolve({
    browser: true,
    preferBuiltins: true,
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'inline',
  }),
  typescript({
    outputToFilesystem: false,
  }),
];

export default {
  input: 'src/index.ts',
  external: [
    'react',
    'react-dom',
    'styled-component',
  ],
};
