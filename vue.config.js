const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  transpileDependencies: true,
  devServer: {
    proxy: {
      '/one':{
        target:"http://10.30.1.3:8081",
        pathRewrite:{'^/one':''}       
      },
      '/two':{
        target:'http://10.30.1.3:8085',
        pathRewrite:{'^/two':''}
      },
      '/three':{
        target:'http://30ad-2409-40f4-20-9b5e-8de4-5c06-f11f-b734.in.ngrok.io',
        pathRewrite:{'^/three':''}
      }
  }
  },
  transpileDependencies: true
})
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: "http://10.30.1.7:8081"
//   }
// })
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: "http://10.30.1.7:8085"
//   }
// })
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: "http://29ef-2409-40f4-20-9b5e-8de4-5c06-f11f-b734.in.ngrok.io/loginUser"
//   }
// })