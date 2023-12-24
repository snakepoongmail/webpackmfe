const {ModuleFederationPlugin} = require('webpack').container;
const env = process.env.env;
const path = require('path');
console.log(`print env: ${env}`);
module.exports = {
    entry: "./setting-index.js",
    mode: "development",
    devtool:"hidden-source-map",
    output: {
        // publicPath: "http://localhost:3003/",
        path: path.resolve(__dirname, "dist","setting"),
        clean:true
    },
    resolve:{
        extensions: ['.jsx', '.js', '.json','.css','.scss','.jpg','jpeg','png',],
      },
   
    plugins: [
        new ModuleFederationPlugin({
            name: "local_app",       
            filename: "remoteEntry.js",
            exposes: {
              "./Setting": `./src/config/${env}/setting.js`
            }
        })
    ],
};