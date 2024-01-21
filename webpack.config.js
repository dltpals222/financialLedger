const path = require('path')

const config = {
  entry:path.resolve(__dirname, 'src','index.tsx'),
  mode:'development',
  output:{
    path:path.resolve(__dirname,'fl-dist'),
    filename:'index.js',
  }
}