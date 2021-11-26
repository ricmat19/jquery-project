const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    // devtool: 'eval-source-map',
    module: {
        rules: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader', 
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
        static: 'src',
        hot: true,
        open: true,
        port: 3001
    },
    // target: 'node',
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