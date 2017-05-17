var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: {
        eostre: "./assets/scripts/src/eostre.ts",
        analytics: "./assets/scripts/src/util/analytics.ts",
        mail: "./assets/scripts/src/util/mail.ts",
        //sw: './assets/scripts/ts/util/worker.ts',
        core: [
            "./assets/scripts/src/util/logging.ts"
        ]
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "core"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: 'runtime',
            minChunks: Infinity
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '.build/assets/scripts/js')
    },
    resolve: {
        extensions: [".ts", ".json", ".js"]
    }
}
