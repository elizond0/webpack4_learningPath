# webpack_learningPath

## 1,webpack-dev-server启动方式(2种)

1./webpack.config.js  module.exports.devServer:{contentBase: path.join(__dirname, "dist")} => $ node_modules/.bin/webpack-dev-server
2./package.json  "scripts": {"server":"webpack-dev-server"} => $ npm run server

## 2,html打包插件:html-webpack-plugin

1. $ npm install -s-d html-webpack-plugin
2. /webpack.config.js  const htmlPlugin= require('html-webpack-plugin')  详情见配置文件

## 3,css-loader:style-loader(处理css文件中的url) css-loade(将css插入到页面中style标签)

1.$ npm install -s-d style-loader css-loader 
2./webpack.config.js  详情见配置文件

## 4,css中的图片处理:file-loader、url-loader

1.$ npm install -s-d file-loader url-loader
2.file-loader：解决引用路径的问题,file-loader可以解析项目中的url引入（不仅限于css）
3.url-loader：如果图片较多，会发很多http请求，会降低页面性能。url-loader会将引入的图片编码(base64)，生成dataURl。url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。
4./webpack.config.js  详情见配置文件

## 5,CSS分离与图片路径处理(webpack官方并不建议这样作，他们认为CSS就应该打包到JavasScript当中以减少http的请求数。看业务需求)

1.$ npm install -s-d extract-text-webpack-plugin
2./webpack.config.js  设置Plugins  修改原来我们的style-loader和css-loader  详情见配置文件
3.webpack目前已升级V4,而相应的extract-text-webpack-plugin并不能兼容,因此安装是需要使用测试版 npm install -s-d extract-text-webpack-plugin@next,临时解决还需要继续观察

## 6,修改打包后图片路径;处理HTML中的图片(html-withimg-loader)

1./webpack.config.js 修改配置module.rules下的url-loader选项的outputPath
2.$ npm install html-withimg-loader -s-d 国人开发,api易懂
3./webpack.config.js 配置loader 详情见配置文件

## 7,Less文件的打包和分离

1.$ npm install -s-d less less-loader
2./webpack.config.js loader配置见文件
3.index.js中import less文件

## 8,sass文件的打包和分离与less类似(node-sass sass-loader)

<!-- ## 9,自动处理CSS3属性前缀(PostCSS)

1.PostCSS是一个CSS的处理平台,自动处理CSS3属性前缀是其中的一个功能。
2.$ npm install -s-d postcss-loader autoprefixer
3.新建文件postcss.config.js
4./webpack.config.js loader配置 -->







