const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css')
const moment = require('moment')
const autoprefixer = require('autoprefixer')
const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss")
//修改antd.design主题文件
const theme = require('./theme.config.js')

module.exports = {
    entry:{
      main:'./src/index.js',
      vendor: ['redux', 'react-redux', 'react-router']
    } ,
    output: {
        comments: false,
        publicPath: 'http://lab.lishangxi.cn',
        path:path.join(__dirname, './bin/public/scripts/'),
        filename: '[name].min.js',
		    chunkFilename: '[id].chunk.js'
    },
    externals: {
        react: 'React',
        immutable: 'Immutable',
        'react-dom': 'ReactDOM'
    },
    watch: true,
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            actions: path.join(__dirname, 'src/actions'),
            //components: path.join(__dirname, 'src/components'),
            containers: path.join(__dirname, 'src/containers'),
            reducers: path.join(__dirname, 'src/reducers'),
            store: path.join(__dirname, 'src/store'),
            routes: path.join(__dirname, 'src/routes'),
            /* routes: path.join(__dirname, 'src/codeSpliteRoutes'), */
        },
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url',
        }, {
            test: /\.(less)$/,
            loaders:[
                        "style",
                        "css",
												`less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
                    ]
        }, {
            test: /\.(css)$/,
            loaders: ['style', 'css'],
        }]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
		      output: {
		        comments: false,
		      },
		      compress: {
		        warnings: false
		      }
		    }),
        new ExtractTextPlugin("lib/styles/[name].min.css", { allChunks: true }),
        new webpack.BannerPlugin(`©Copyright leesx inc. \n update: ${nowDateStr}`)
    ]
};
