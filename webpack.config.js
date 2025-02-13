const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
    plugins: [
        new Dotenv({
          path: `.env.${process.env.NODE_ENV}`,
      }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
      port: 3000,
      hot: true,
      open: true,
  },
    mode: process.env.NODE_ENV || 'development',
};
