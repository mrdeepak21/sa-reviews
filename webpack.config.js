const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'reviews.js',
      clean: true, // Clean the build folder before each build
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'] // Handles CSS files
        },
        {
          test: /\.svg$/i,
          use: ['@svgr/webpack'], // Use SVGR to handle SVGs
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'] // Allows omitting file extensions during import
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    cache: isDevelopment
      ? false // Disable caching in development mode
      : {
          type: 'filesystem', // Use filesystem cache for production
          cacheDirectory: path.resolve(__dirname, '.webpack-cache'), // Cache location
          buildDependencies: {
            config: [__filename], // Rebuilds if this config changes
          },
        },
    devtool: isDevelopment ? 'source-map' : false, // Source maps only in development
  };
};
