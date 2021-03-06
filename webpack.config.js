const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/App/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        `${__dirname}/App/index.js`,
    ],

    output: {
        path: `${__dirname}/wwwroot/`,
        filename: 'index_bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    plugins: [HTMLWebpackPluginConfig],
};
