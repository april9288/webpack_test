/*
When it comes to Webpack, You need to know 3 things.
Entry point, Output point, and Module rules.

You should specify the entry point path, so that webpack knows where to start bundling your React app.
Output point is where webpack spits out a static file which is 'bundle.js' for this case.
After you run "npm run webpack", then you will see there is 'bundle.js' generated inside "/static" folder.
So the two files (index.html & bundle.js) will describe what your React app looks like. (magic!?)

And lastly, you should specify what kind of compiler(or loader) webpack should use.
There are so many compilers and the most well-known one is Babel. You can look it up later. 

Now take a look at the module below. We have two rules.
First one is Babel.
Second one is for CSS. It allows us to bundle with .css files.
So in your react files(.jsx files), you can import .css files which is nice :)

If you have any question, please let me know.

Official Docs : https://webpack.js.org/concepts
*/
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client/"),
  output: {
      path: path.resolve(__dirname, "./static"),
      filename: "bundle.js"
    },
	module: {
		rules: [{
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}

