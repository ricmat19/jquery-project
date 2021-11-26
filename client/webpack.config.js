const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
        rules: [
            { 
                test: /\.js?$/, 
                loader: 'bable-loader', 
                exclude: /node_modules/
            },
            { 
                test: /\.png?$/, 
                use: [{
                    loader: 'url-loader', 
                    options: {
                        mimetype: 'image/png'
                    }
                }]
            },
            { 
                test: /\.css?$/, 
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.s(a|c)ss?$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: 'src',
        hot: true,
        open: true,
        port: 3001,
        watchContenBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new dotenv()
    ]
}