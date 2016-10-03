/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var forLoop =  require('postcss-for');

var variables = require("./src/variables");

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx',
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel-loader'],
            include: path.join(__dirname, 'src'),
        }, {
            test: /\.json$/,
            loader: 'json',
            include: path.join(__dirname, 'src'),
        }, {
            test:   /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        }],
    },
    postcss: function () {
        return [
            forLoop,
            cssnext({
                features: {
                    customProperties:{
                        variables: variables
                    }
                }
            })
        ];
    }
};
