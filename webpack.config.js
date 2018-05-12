'use strict';

require('dotenv').config({ path: '__dirname/.dev.env'});
const production = process.env.NODE_ENV === 'production';

const {DefinePlugin, EnviornmentPlugin} = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');

const config = {
  entry:'./src/main.js',
  mode:'development',
  plugins: [new HtmlPlugin({template: __dirname + '/src/index.html'})],  module:{
    rules:[
      {test: /\.jsx?$/, loader: ['babel-loader'], exclude:/node_modules/},
      {test: /\.s?css$/, loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      
      ]},
    ]
  }
};

module.exports = config;