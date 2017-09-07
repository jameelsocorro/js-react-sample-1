'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'eval',
    entry: {
        'app.bundle': './src/index.js',
        'app.bundle.min': './src/index.js',
    },    
    output: {
        path: __dirname + '/src',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style-loader!css-loader?minimize!postcss-loader!sass-loader'
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: "url-loader?limit=50000&name=content/fonts/[name].[ext]"
            }
        ]
    }
};