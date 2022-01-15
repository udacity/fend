
//entry, output, field loaders, plugins, mode

const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= {
    //set up the entry point
    entry: './src/client/index.js',

    //mode- set environment
    mode:'production',


    //Loader: if the Es6 code we write can't be read by client browser, it will automatically translate for us
    //for all .js files(except node_modules folder), apply babel loader
    module: {
        rules:[
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },

    //plugins: we don't need to add reference manually
    //will create a new index.html file in dist folder
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
    })

    ]
}