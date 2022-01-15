//entry, output, field loaders, plugins, mode

const path = require("path")
const webpack = require("webpack")
module.exports= {
    //set up the entry point
    entry: './src/client/index.js',
    module: {
        rules:[
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}