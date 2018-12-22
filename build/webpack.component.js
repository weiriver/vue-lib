const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Components = require('../src/components.json')
let ComponentsObj = {}
for (let key in Components) {
    ComponentsObj[key] = Components[key].path.replace('./', './src/')
}

var externals = {};

Object.keys(Components).forEach(function (key) {
    externals[`vue-river-ui/src/packages/${key}`] = `vue-river-ui/lib/${key}`;
});

const config = require('./config')
const webpackConfig = {
    entry: ComponentsObj,
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            main: path.resolve(__dirname, '../src'),
            packages: path.resolve(__dirname, '../src/packages'),
            examples: path.resolve(__dirname, '../examples'),
            'vue-river-ui': path.resolve(__dirname, '../'),
            '~@': path.resolve(__dirname, '../src')
        },
        modules: ['node_modules']
    },
    externals: externals,
    module: {
        rules: [
            // {
            //   test: /\.(jsx?|babel|es6)$/,
            //   include: process.cwd(),
            //   exclude: config.jsexclude,
            //   loader: 'babel-loader'
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    preserveWhitespace: false
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader?minimize=false'
            }
            // {
            //   test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
            //   loader: 'url-loader',
            //   query: {
            //     limit: 10000,
            //     name: path.posix.join('static', '[name].[hash:7].[ext]')
            //   }
            // },
            // {
            //   test: /\.svg(\?\S*)?$/,
            //   loader: 'url-loader',
            //   query: {
            //     limit: 10000,
            //     name: path.posix.join('static', '[name].[hash:7].[ext]')
            //   }
            // },
            // {
            //   test: /\.(gif|png|jpe?g)(\?\S*)?$/,
            //   loader: 'url-loader',
            //   query: {
            //     limit: 10000,
            //     name: path.posix.join('static', '[name].[hash:7].[ext]')
            //   }
            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}
console.log('******************************************************************')
console.log(webpackConfig)
console.log('******************************************************************')
module.exports = webpackConfig
