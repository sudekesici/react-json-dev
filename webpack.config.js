const path = require('path');



module.exports = (env, arg) => {
    const isDev = arg.mode === "development"
  
    return {
      mode: isDev ? "development" : "production",
      entry: {
        filterSample: './src/index.js'
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "swc-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader', options: { url: false } },
              {
                loader: 'sass-loader'
              }
            ]
          },
        ]
      },
      devtool: isDev ? 'inline-source-map' : false
    }
  }
  