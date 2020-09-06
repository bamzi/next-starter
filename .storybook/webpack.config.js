var path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]],
		},
	});
	config.module.rules.push({
		test: /\\.css$/,
		loaders: [
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					config: {
						path: './',
					},
				},
			},
		],
		include: path.resolve(__dirname, '../'),
	});
	config.resolve.extensions.push('.ts', '.tsx');
	config.resolve.plugins.push(
		new TsconfigPathsPlugin({
			configFile: path.resolve(__dirname, '../tsconfig.json'),
		}),
	);
	return config;
};
