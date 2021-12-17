const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|gif)$/i,
                use: ['img-optimize-loader']
            },
            {
                test: /\.mp(3|4)$/i,
                loader: 'file-loader',
                options: '[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
        new MiniCssExtractPlugin(),
        // new BundleAnalyzerPlugin()
    ]
}