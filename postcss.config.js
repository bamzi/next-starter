const purgecss = {
	'@fullhuman/postcss-purgecss': {
		content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/component/**/*.{js,jsx,ts,tsx}'],
		defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
	},
};

module.exports = {
	plugins: {
		'postcss-import': {},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production' ? purgecss : {}),
	},
};

// module.exports = {
//   plugins: [
//     'tailwindcss',
//     process.env.NODE_ENV === 'production'
//       ? [
//           '@fullhuman/postcss-purgecss',
//           {
//             content: [
//               './src/pages/**/*.{js,jsx,ts,tsx}',
//               './src/component/**/*.{js,jsx,ts,tsx}',
//             ],
//             defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//           },
//         ]
//       : undefined,
//     'autoprefixer'
//   ],
// }
