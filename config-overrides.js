const { override, fixBabelImports } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader')
const colorData = require('./color.json')

module.exports = override( 
  addLessLoader({
    lessLoaderOptions:{
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: colorData
      }
    }
  })
)