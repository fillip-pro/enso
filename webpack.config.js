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
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
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
        extensions: [".ts", ".json", ".js", ".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
