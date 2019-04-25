var webpack = require('webpack');
var path  = require('path')
var fs    = require('fs')
var Webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var htmlWebpackConf = []

function resolve (dir) {
  return path.join(__dirname, dir)
}

const ignoreList = ['common','ruanyifeng-flux','facebook-flux']

function getEntris (dir) {
  var modulePath = resolve(dir)
  var moduleFiles = fs.readdirSync(modulePath)
  var entrys = {}
  moduleFiles.forEach(filename => {
    if(ignoreList.indexOf(filename) === -1){
      entrys[filename] = path.join(modulePath, `${filename}`, 'index.jsx')
      htmlWebpackConf.push(new HtmlWebpackPlugin({
        template: './index.html',
        filename: `${filename.split('-')[0]}.html`,
        chunks: ['common', `${filename}`]
      }))
    }
  })
  return entrys
}


var webpackConf = {
  entry: {
    ...getEntris('remark')
  },
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      '&': resolve('remark'),
      '@': resolve('src')
    }
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      { test: /\.json$/, exclude:/node_modules/, loader: 'json-loader'},
      { test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, exclude: /node_modules/, loader: 'url-loader',options: {
        limit: 1000,
        name: path.posix.join('static','img/[name].[hash:7].[ext]')
      }},
      { test: /\.(png|jpg|jpeg|gif|svg)$/, exclude: /node_modules/, loader: 'file-loader',options: {
        limit: 1000,
        name: path.posix.join('static','img/[name].[hash:7].[ext]')
      }},
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: path.posix.join('static','fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: '/dist'
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
}

webpackConf.plugins = webpackConf.plugins.concat(htmlWebpackConf)

module.exports = webpackConf
