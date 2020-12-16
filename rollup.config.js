import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

const external = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)];

const plugins = [
  typescript({
    typescript: require('typescript'),
    tsconfig: 'tsconfig.build.json'
  })
];

const config = [
  {
    input: 'src/lib/index.ts',
    output: {
      preserveModules: true,
      dir: 'lib',
      format: 'esm',
      sourcemap: true
    },
    plugins,
    external
  },
  {
    input: 'src/lib/index.ts',
    output: {
      preserveModules: true,
      dir: 'lib-commonjs',
      format: 'commonjs',
      sourcemap: true
    },
    plugins,
    external
  },
  {
    input: 'src/lib/index.ts',
    output: {
      file: 'lib-amd/index.js',
      name: 'JustPackages',
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      ...plugins,
      nodeResolve({
        resolveOnly: ['@babylonjs/core']
      })
    ]
  }
];

export default config;
