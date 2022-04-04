var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.jsx?$/,
            loader: 'babel-loader'
        },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: require.resolve('url-loader')
                },{
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                    loader: "url-loader",
                }
            },
            {test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}