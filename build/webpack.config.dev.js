const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {

	mode: 'development',

	entry: [
		'./src/index.js'
	],

	output: {
		path: resolve('dist'),
		filename: 'bundle.[hash].js'
	},

	devServer: {
		hot: true,
		watchOptions: {
			poll: true
		}
	},

	module: {
		rules: [
			// {
			// 	test: /\.(js|vue)$/,
			// 	use: 'eslint-loader',
			// 	enforce: 'pre'
			// },
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 4096,
					name: 'fonts/[name].[ext]?[hash]',
				}
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash].[ext]'
				}
			}
		]
	},

	plugins: [
		//	Copies imgs from src static to equiv folder in dist
		new CopyWebpackPlugin([{
			from: resolve('static/img'),
			to: resolve('dist/static/img'),
			toType: 'dir'
		}]),
		//
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
}