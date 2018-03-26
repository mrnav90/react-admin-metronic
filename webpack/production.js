import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import dotenv from 'dotenv';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

dotenv.config();

const webpackConfig = {
  entry: ['./src/index.js', 'babel-polyfill'],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(md)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'html', 'highlight', 'markdown'
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?{optipng: {optimizationLevel: 7}, gifsicle: {interlaced: false}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'Popper': 'popper.js'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_SERVER),
      'APP_URL': JSON.stringify(process.env.APP_URL)
    }),
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
    new UglifyJsPlugin({
      sourceMap: false,
      test: /\.js($|\?)/i,
      uglifyOptions: {
        mangle: false,
        compress: {
          dead_code: false,
          conditionals: false,
          unused: false,
          side_effects: false
        },
        comments: false
      }
    }),
    new CompressionPlugin({
      asset: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, '../index.html'), to: path.join(__dirname, '../public/index.html')},
      {from: path.join(__dirname, '../assets'), to: path.join(__dirname, '../public/assets')}
    ])
  ]
};

export default webpackConfig;
