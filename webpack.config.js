const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   mode: 'development',
   entry: ['@babel/polyfill', './src/index.js'],
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   devServer: {
      port: 3000,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [
               // Translates CSS into CommonJS
               'css-loader',
               // Compiles Sass to CSS
               'sass-loader',
            ],
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
         {
            test: /\.m?jsx$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
               },
            },
         },
      ],
   },
}
