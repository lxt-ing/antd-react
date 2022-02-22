const { override} = require('customize-cra'); // 高级版本customize-cra的没有addLessLoader
const addLessLoader = require('customize-cra-less-loader')
module.exports = override( 
  addLessLoader({
    lessLoaderOptions:{
      lessOptions: {
        javascriptEnabled: true,
      }
    }
  })
)