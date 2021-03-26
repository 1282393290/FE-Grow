# webpack知识点

## 概念
· 一款目前最流行的前端构建打包工具

## 前端构建工具演变之路
· 刀耕火种
· grunt
· gulp|fis3
· rollup|webpack|parcel

## 为什么要构建工具
· 转换ES6语法
· 转换vue单文件组件
· 转换JSX语法
· css前缀补全、预处理器使用
· 压缩与混淆
· 图片压缩优化

## webpack文件名称（webpack.config.js）
## webpack配置文件内容
· module.exports = {配置项};
· entry -入口文件
· ouput -出口文件
· mode -环境
· module：{rules：[{test: /\.txt$/, use: 'raw-loader'}]} -loader配置
· plugins：[new HtmlWebpackPlugin({template: './src/index.html'})] -插件配置

## 安装
· 初始化：npm init -y 生成package.json
· 依赖node
· 全局安装或局部安装
· npm i --save-dev webpack webpack-cli

## 运行webpack的几种方式
· ./node_modules/.bin/webpack
· npx webpack
· npm脚本

## webpack-dev-server 模块
· 安装webpack-dev-server
· npm run dev的脚本里面用的webpack换成webpack-dev-server即可
· webpack中配置devServer这个选项

PS：
· webpack-dev-server不会帮我们生成dist文件夹，他会生成在内存中。
· 默认他的web服务的根目录是生成在项目的根目录中的，我们期望他的web服务启动在dist文件夹中

## entry
· 单入口 相当于entry: {main: './src/index.js'},因为单文件默认打包出的文件mian.js
· 多入口 entry: {app: './src/index.js', app2: './src/main.js'}

## output
· 多入口的name占位符
· 多入口的hash占位符

## 常用的loader（转换器）
· 功能：本身是一个函数，接收源文件作为参数，返回转换的结果
· babel-loader 转换es6、es7等js新特性语法
· css-loader 支持css文件的加载和解析
· less-loader 将less文件转换成css文件
· sass-loader 将sass|scss文件转换成css文件
· ts-loader 将typescript转换成JavaScript
· file-loader 进行图片、字体等的打包
· vue-loader 进行vue单文件组件的转换

## babel相关
· babel插件 一个插件对应多个功能
· babel预设 多个插件的集合
· 安装：npm i --save-dev babel-loader @babel/core @babel/preset-env
· babel-loader 是给webpack去用的
· @babel/core babel的核心
· @babel/preset-env 最新的babel预设
· 写一个babel的配置，告诉babel使用什么插件与预设。 .babelrc
· 在webpack.config.js配置上的babel这个loader

## 使用css
· css-loader 让webpack能解析css文件的
· style-loader 让第一步中解析出来的东西，使用style标签写入到浏览器上的

## 使用sass
· 安装sass-loader
· 安装node-sass//比较恶心，下载不下来
· 配置rules规则

## 使用less
· 安装less-loader
· 安装less
· 配置rules规则

## 通过自己写的webpack配置来运行vue时候发现页面无法渲染出数据
注：原因是vue的版本问题
· 完整版 支持template选项
· 只包含运行时的版本（runtime版本上） 不支持template选项

## 如何知道我引入的vue是完整版还是runtime版
· 在node_modules下找到vue
· 看他的package.json文件
· main | module
· import Vue from 'vue'所引入的文件，要找他module的配置
· require('vue') 所引入的文件，要去找他main的配置
· 发现module配置是runtime版本

## 修改为完整版vue
· 配置webpack别名alias

## runtime版本不支持template，我们如何写页面的内容？
· render选项使用js的方式去创造页面的dom结构

## 常用的plugins
· html-webpack-plugin，自动创建html文件，配置template根据这个文件创建打包文件

## 组件的作用域样式
· 我们希望组件的样式只对当前组件生效
· 只需要在style标签上加scoped属性即可