import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: [
        { file: 'dist/index.cjs.js', format: 'cjs' },
        { file: 'dist/index.esm.js', format: 'esm' },
        { file: 'dist/index.umd.js', format: 'umd', name: 'useHacking' },
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
        }),
    ],
    external: ['react', 'react-dom'], // Ensure React is a peer dependency
};
