import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js', // Main entry point of your library
    output: [
        { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true }, // CommonJS output
        { file: 'dist/index.esm.js', format: 'esm', sourcemap: true }, // ES Module output
        { file: 'dist/index.umd.js', format: 'umd', name: 'useHacking', sourcemap: true }, // UMD output
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx'], // Add .jsx extensions
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**', // Exclude node_modules from being transpiled
            extensions: ['.js', '.jsx'], // Transpile both .js and .jsx files
            presets: ['@babel/preset-react'], // Use React preset for JSX
        }),
    ],
    external: ['react', 'react-dom'], // Treat React and ReactDOM as peer dependencies
};
