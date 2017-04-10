var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: {
        eostre: "./assets/scripts/ts/eostre.ts",
        analytics: "./assets/scripts/ts/util/analytics.ts",
        mail: "./assets/scripts/ts/util/mail.ts",
        //sw: './assets/scripts/ts/util/worker.ts',
        core: [
            "./assets/scripts/ts/util/logging.ts"
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
        path: path.resolve(__dirname, '.dist/assets/scripts/js')
    },
    resolve: {
        extensions: [".ts", ".json", ".js"]
    }
}
