var path = require("path");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('./', "dist"),
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3008,
        contentBase: "./",
        historyApiFallback: false
    }
}