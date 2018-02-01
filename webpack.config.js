module.exports = {
    entry: './app.js',
    output: {
        path: __dirname+'/dist/script/',
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        port: 9001
    }
};