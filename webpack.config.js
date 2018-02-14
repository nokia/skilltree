const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
	devtool: 'inline-source-map',
	entry: './private/webpack/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'static')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'socketAddress': JSON.stringify(process.env.SOCKET_ADDRESS
					|| '127.0.0.1'),
				'socketPort': JSON.stringify(process.env.SOCKET_PORT
					|| '81'),
				'whereAreYouBaseURL': JSON.stringify(process.env.WHERE_ARE_YOU_BASE_URL
					|| 'http://example.com/user/'),
				'delveUrl': JSON.stringify(process.env.DELVE_BASE_URL
						|| 'example.com'),
				'delveEmail': JSON.stringify(process.env.DELVE_EMAIL
					|| '%40example.com')
			},
		})
	]
};
