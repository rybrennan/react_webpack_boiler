const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//what is the entry point to create dependency graph?
//what transformations, if any, to make on your code(bc out of the box, webpack onsly supports /processesJS and json files)
//so we need a loader-
//the location o put the newly formed bundles

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  //DEFINE the transformations to our code. Rules for each file type
  module: {
    //loaders- array of objects
    rules: [{ test: /\.svg$/, use: 'svg-inline-loader' },
    //style loader injects CSS into the DOM
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    //select all JS folders.  As webpack is bundling, anytime it sees a JS folder,
    //it will run this loader on it
    { test: /\.(js)$/, use: 'babel-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
  ],
  //when we "run build"
  mode: 'development'
}