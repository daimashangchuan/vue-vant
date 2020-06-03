/**
 * 全局的配置文件
 */
const path = require("path");

module.exports = {
  // 例如，部署在子域名下 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  publicPath: "/",

  // 打包生成的路径
  outputDir: "build",

  // 打包完build目录下放置静态文件的地方
  assetsDir: "",

  // 指定生成的 html 的输出路径
  indexPath: "index.html",

  // 包含了 hash 的名字
  filenameHashing: true,

  // 多页面配置
  pages: undefined,
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // },

  // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  lintOnSave: false,

  //服务器请求相关的配置
  devServer: {
    // open: true, // 启动服务后是否打开浏览器
    // host: '0.0.0.0',
    port: 9686, //端口号
    // https: true, //是否开启协议名,如果开启会发出警告
    // hotOnly: false, //热模块更新的一种东西,webpack中自动有过配置,但如果我们下载一些新的模块可以更好的给我更新一些配置
    proxy: {
      //配置跨域
      "/Api": {
        //配置跨域的名字
        target: process.env.NODE_ENV == "prod" ? process.env.VUE_APP_PROD : process.env.VUE_APP_DEV, //跨域的地址
        ws: true,
        changOrigin: true, //是否跨域
        pathRewrite: {
          //当前的名字
          "^/api": "/",
        },
      },
    },
  },

  // 存放第三方的插件
  pluginOptions: {
    // 引入全局的 less 的样式
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/style/common.less")],
    },
     // 可以通过 less 文件覆盖（文件路径为绝对路径）
    less: {
      modifyVars: {
        hack: `true; @import "${ [path.resolve(__dirname, "./src/assets/style/vantUi.less")] }";`,
      },
    },
  },
};
