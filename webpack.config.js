const path=require('path')	
const htmlPlugin= require('html-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin")

module.exports={
    entry:{
        entry:'./src/index.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),//path必须引入,node模块
        filename:'[name].js',//[name]表示与entry对象下的key值对应,即entry/entry2
        publicPath:"http://localhost:9000/"//用于解决分离后css路径不正确,output主要是用于处理静态文件路径
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,//是否gzip压缩
        port: 9000
    },
    module:{
        rules: [
            // {//css-loader配置
            //     test: /\.css$/,
            //     //use: ['style-loader', 'css-loader']//loader也会有use的写法
            //     use: extractTextPlugin.extract({//用于css分离
            //         fallback: "style-loader",//当css没有被提取,调用XXloader
            //         // use: "css-loader"
            //     })
            // },
            {//url-loader配置,url-loader内置了file-loader
                test: /\.(png|jpg|gif)$/,//匹配图片后缀
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,//单位是B
                        outputPath:'images/',//打包后的图片放到dist/images文件夹下
                    }
                }]
            },
            {//html文件中img标签的图片处理
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            // {//less-loader
            //     test: /\.less$/,
            //     use: extractTextPlugin.extract({//用于css分离
            //         fallback: "style-loader",
            //         use: [
            //             {
            //                 loader: "css-loader" // translates CSS into CommonJS
            //             },
            //             {
            //                 loader: "less-loader" // compiles Less to CSS
            //             }
            //         ]
            //     })
            // }
        ]
    },
    plugins:[
        new htmlPlugin({//html打包插件
            minify:{//html文件进行压缩
                // removeAttributeQuotes:true//去掉属性的双引号
            },
            hash:true,//避免缓存JS
            template:'./src/index.html'//要打包的html模版路径和文件名称
        }),
        new extractTextPlugin('css/index.css')// 这是分离后的路径位置 即 dist/css/index.css
    ],
}