
module.exports = {
  baseUrl: '/niem-content-hub/',
  assetsDir: 'src/assets',
  chainWebpack: config => {
    config
      .module
      .rule("xml")
      .test(/\.(xml|xsd)$/)
      .use("xml-loader")
      .loader("xml-loader");
  },
  devServer: {
    watchOptions: {
      poll: true
    }
  }
}