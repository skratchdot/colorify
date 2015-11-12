module.exports = {
    context: `${__dirname}/app/js`,
    entry: {
        javascript: ['./App.js']
    },
    output: {
        filename: 'app.js',
        path: `${__dirname}/build/dev/colorify/js`
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
              test: /\.json$/,
              loader: 'json?name=[name].[ext]'
            }
        ]
    }
};
