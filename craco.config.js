const path = require('path')

module.exports = {
    reactScriptsVersion: 'react-scripts',
  
    webpack: { 
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
        '@redux': path.resolve(__dirname, 'src/stores/redux'),
        "@images": path.resolve(__dirname, 'src/assets/images'),
        "@message": path.resolve(__dirname, 'src/assets/message'),
        "@helpers": path.resolve(__dirname, 'src/helpers'),
        "@hooks": path.resolve(__dirname, 'src/hooks'),
        "@global" : path.resolve(__dirname, 'src/assets/style')
      }
    }
  }
  