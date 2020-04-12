const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require ('optimize-css-assets-webpack-plugin');
//const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output:{
        libraryTarget: 'var',
        library: 'Client'
    },
    optimization: {
        minimizer: [new TerserPlugin({}),new OptimizeCssAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename:'[name].css'}),
        //new WorkboxPlugin.GenerateSW()
    ]
}

