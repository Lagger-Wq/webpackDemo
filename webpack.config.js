const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	entry: {
        main:'./src/index.js',
    },
	output: {
		filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename:'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            }
		],
    },
    devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         open:false,
         hot:true
       },
       plugins:[
           new htmlWebpackPlugin({
               title:'webpackDemo'
           }),
           new webpack.HotModuleReplacementPlugin(),
           new CleanWebpackPlugin ()

       ]
}
 