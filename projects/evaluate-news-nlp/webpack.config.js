//entry, output, field loaders, plugins, mode

const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports= {
    //set up the entry point
    entry: './src/client/index.js',

    //Loader: if the Es6 code we write can't be read by client browser, it will automatically translate for us
    //for all .js files(except node_modules folder), apply babel loader
    module: {
        rules:[
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    //plugins: we don't need to add reference manually
    //will create a new index.html file in dist folder
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}