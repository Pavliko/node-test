var path = require("path");
module.exports = {
  entry: ['./app/scripts.babel.js'],
  output: {
    publicPath: '/dist/',
    filename: 'scripts.js',
    path:  path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.monk$/,
        loader: 'monkberry-loader',
        query: {
          hot: true
        }
      },{
        test: /\.babel\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },{
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('postcss-mixins'),
      require('postcss-flexibility'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-color-function'),
      require('postcss-svg')({paths: ['app/svg'], debug: true, svgo: true}),
      require('autoprefixer-core')({browsers: [ 'last 2 versions', 'IE 9', 'IE 10', 'Opera 12' ]}),
      require('postcss-include')
    ];
  }
};
