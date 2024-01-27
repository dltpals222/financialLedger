const path = require('path')

const config = {
  entry:path.resolve(__dirname, 'src','app.tsx'),
  mode:'development',
  output:{
    path:path.resolve(__dirname,'fl-dist'),
    filename:'dist.js',
  },
  module:{
    rules:[
      {
        test:/\.(js|tsx?)$/,
        exclude:/node_modules/,
        use:['babel-loader','ts-loader'],
      }
    ]
  },
  resolve:{
    extensions : ['.tsx','.ts','.jsx','.js'],
  }
}

module.exports = config