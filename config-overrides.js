const { override, fixBabelImports } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader')
module.exports = override( 
  addLessLoader({
    lessLoaderOptions:{
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0066E0'},
      }
    }
  })
)