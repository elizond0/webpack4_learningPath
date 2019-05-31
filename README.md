# webpack_learningPath

## 1,webpack-dev-server 启动方式(2 种)

1. /webpack.config.js : module.exports.devServer:{contentBase: path.join(\_\_dirname, "dist")} => \$ node_modules/.bin/webpack-dev-server
2. /package.json : "scripts": {"server":"webpack-dev-server"} => \$ npm run server

## 2,html 打包插件:html-webpack-plugin

1. \$ npm install -S-D html-webpack-plugin
2. /webpack.config.js : const htmlPlugin= require('html-webpack-plugin') 详情见配置文件

## 3,css-loader:style-loader(处理 css 文件中的 url) css-loader(将 css 插入到页面中 style 标签)

1. \$ npm install -S-D style-loader css-loader
2. /webpack.config.js : 详情见配置文件

## 4,css 中的图片处理:file-loader、url-loader

1. \$ npm install -S-D file-loader url-loader
2. file-loader：解决引用路径的问题,file-loader 可以解析项目中的 url 引入（不仅限于 css）
3. url-loader：如果图片较多，会发很多 http 请求，会降低页面性能。url-loader 会将引入的图片编码(base64)，生成 dataURl。url-loader 提供了一个 limit 参数，小于 limit 字节的文件会被转为 DataURl，大于 limit 的还会使用 file-loader 进行 copy。
4. /webpack.config.js 详情见配置文件

## 5,CSS 分离与图片路径处理(webpack 官方并不建议这样作，他们认为 CSS 就应该打包到 JavasScript 当中以减少 http 的请求数。看业务需求)

1. \$ npm install -S-D extract-text-webpack-plugin
2. /webpack.config.js : 设置 Plugins 修改原来我们的 style-loader 和 css-loader 详情见配置文件
3. webpack 目前已升级 V4,而相应的 extract-text-webpack-plugin 并不能兼容,因此安装是需要使用测试版 : npm install -S-D extract-text-webpack-plugin@next,临时解决还需要继续观察

## 6,修改打包后图片路径;处理 HTML 中的图片(html-withimg-loader)

1. /webpack.config.js : 修改配置 module.rules 下的 url-loader 选项的 outputPath
2. \$ npm install html-withimg-loader -S-D (国人开发,api 易懂)
3. /webpack.config.js : 配置 loader 详情见配置文件

## 7,Less 文件的打包和分离

1. \$ npm install -S-D less less-loader
2. /webpack.config.js - loader 配置见文件
3. index.js 中 import - less 文件

## 8,sass 文件的打包和分离与 less 类似(node-sass sass-loader)

## 9,自动处理 CSS3 属性前缀(PostCSS)

1. PostCSS 是一个 CSS 的处理平台,自动处理 CSS3 属性前缀是其中的一个功能。
2. \$ npm install -S-D postcss-loader autoprefixer
3. 新建文件 postcss.config.js
4. /webpack.config.js - loader 配置

## 10,编译 ES6(babel)

- 需要注意的是, babel-loader 和 babel-polyfill。前者负责语法转化，比如：箭头函数；后者负责内置方法和函数，比如：new Set(),babel 和相关的技术生态：

1. babel-loader: 负责 es6 语法转化
2. babel-preset-env: 包含 es6、7 等版本的语法转化规则
3. babel-polyfill: es6 内置方法和函数转化垫片
4. babel-plugin-transform-runtime: 避免 polyfill 污染全局变量

- 安装相关库

```json
{
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "webpack": "^4.15.1"
  },
  "dependencies": {
    "babel-polyfill": "^6.26.0",
    "babel-runtime": "^6.26.0"
  }
}
```

- webpack 中配置使用 babel
  - babel 的相关配置，推荐单独写在.babelrc 文件中。
  - 在 webpack 配置文件中，关于 babel 的调用需要写在 module 模块中。对于相关的匹配规则，除了匹配 js 结尾的文件，还应该去除 node_module/文件夹下的第三库的文件
  - 配置 babel-polyfill，需要在项目的入口文件中被引入，或者在 webpack.config.js 中配置。
