// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
    input: 'lib/index.js',
    output: {
        file: 'mobile-useragent-parse.min.js',
        format: 'umd',
        name: 'mobile-useragent-parse'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
};