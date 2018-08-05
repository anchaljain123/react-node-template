const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        publicPath: "/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg|ico)?$/,
                use: [
                    {
                        loader: 'file-loader',

                    },
                ],
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
