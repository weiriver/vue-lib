const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpackCleanPlugin = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const ENV = process.argv.NODE_ENV

module.exports = merge(webpackBaseConfig, {
  output: {
    // filename: 'vue-river-ui.js',
    filename: 'index.js',
    path: path.resolve(config.basePath, './lib'),
    library: 'vue-river-ui', // 指定的就是你使用require时的模块名
    publicPath: '/lib/',
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [miniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'sass-loader'}]
      }
    ]
  },

  plugins: [
    new webpackCleanPlugin(
      ['../lib'], {
        root: path.resolve(__dirname),
        allowExternal: true,
        exclude: ['vue.min,js'] // 排除vue.js打包
      }
    ),
    new miniCssExtractPlugin({
      // filename: 'demo.ui.min.css'
      filename: 'theme/index.css'
    })
  ]
})

    
