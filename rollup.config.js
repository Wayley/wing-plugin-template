import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
// const globals = { react: "React" };
const globals = {};
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/wing-plugin-template.js',
      name: 'wing-plugin-template',
      format: 'umd',
      globals,
    },
    {
      file: 'dist/wing-plugin-template.es.js',
      format: 'es',
      globals,
    },
    {
      file: 'dist/wing-plugin-template.amd.js',
      format: 'amd',
      globals,
    },
    {
      file: 'dist/wing-plugin-template.cjs.js',
      format: 'cjs',
      globals,
    },
  ],
  // external: ["react"],
  plugins: [
    babel({ exclude: '**/node_modules/**', runtimeHelpers: true }),
    terser(),
  ],
};
