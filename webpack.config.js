 module.exports = {
    entry: {
      app: ["webpack/hot/dev-server", "./src/scripts/main.js"]
    },
    output: {
      path: "./build",
      filename: "bundle.js"
    },
    plugins: [],
    resolve: {
      modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            
            { test: /\.jsx?$/, loader: "jsx" },
            {
              test: /\.scss$/,
              loader: "style!css!sass?outputStyle=expanded"
            },
            {
              test: /\.(html|png)$/,
              loader: "file?name=[path][name].[ext]&context=./src"
            }
        ]
    }
};

