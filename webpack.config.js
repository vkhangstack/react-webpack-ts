// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        compress: true,
        port: 9000,
        client: {
            logging: 'log',
            progress: true,
            reconnect: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/index.html"
        })
    ],
    mode: 'development',
}