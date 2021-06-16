const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const SRC = 'src';
const JS_DIR = path.resolve(__dirname, SRC + '/js');
const IMAGE_DIR = path.resolve(__dirname, SRC + '/images');
const FONT_DIR = path.resolve(__dirname, SRC + '/fonts');
const OUTPUT_DIR = path.resolve(__dirname, 'out');

module.exports = {
	entry: {
		main: JS_DIR + '/main.js',
		editor: JS_DIR + '/editor.js',
	},
	output: {
		path: OUTPUT_DIR,
		filename: 'js/[name].js',
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: IMAGE_DIR,
					to: 'images/[name][ext]',
				},
				{
					from: FONT_DIR,
					to: 'fonts/[name][ext]',
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
	externals: {
		jquery: 'jQuery',
	},
};
