let path = require('path');
let webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src', 'index.js'),
        path.resolve(__dirname, 'src', 'index.html')
    ],
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel'],
            },
        }, {
            test: /\.html$/,
            use: 'file-loader?name=[name].[ext]',
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
