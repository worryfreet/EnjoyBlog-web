const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    },
    css: {
      // 启用 CSS modules
      // 是否使用css分离插件
      extract: true,
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-plugin-px2rem')({
              //假如设计图给的宽度是1920，按照24等份来划分(1920/24),remUnit设置为80(1rem = 80px)
              rootValue: 80, // 换算基数， 默认100
              exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
              mediaQuery: true, // （布尔值）允许在媒体查询中转换px。
              minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
            })
          ]
        }
      }
    }
  }
})
