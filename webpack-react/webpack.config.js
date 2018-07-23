const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            name: '/static/css/images/[name].[hash:8].[ext]' // 
                        }
                    }
                ]
            },
            {
                test: /\.js/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',// 顺序不能反
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            
        ]
    },
    devServer: {
        // contentBase: './dist',// 运行的入口文件
        port: 3000,  // 运行端口
        open: true // 自动打开浏览器 node会打开浏览器的进程
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chumkFilename: '[id].css',// 文件块
            
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname,'../public/index.html')
            file: 'index.html',
            template: 'public/index.html'
        })
    ],
    devtool: 'inline-source-map' // 开发工具，解决打包后的调试问题，会显示出错的地方
}