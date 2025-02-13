'use strict';

const path = require('path');

module.exports = {
  entry: './browser/index.js', // مسیر فایل ورودی اصلی پروژه
  output: {
    path: path.resolve(__dirname, 'public/js'), // مسیر خروجی فایل باندل شده
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/, // فایل‌هایی که باید پردازش شوند (جاوااسکریپت و JSX)
        exclude: /(node_modules|bower_components)/, // فایل‌هایی که باید نادیده گرفته شوند
        use: {
          loader: 'babel-loader', // استفاده از babel-loader برای پردازش
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // تنظیمات Babel برای React و ES6+
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // پسوندهای فایل‌هایی که باید Resolve شوند
  },
};
