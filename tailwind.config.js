/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

let colors;
if (process.env.platform === 'first-app') {
	colors = require('./lib/tailwind/first-app');
} else if (process.env.platform === 'second-app') {
	colors = require('./lib/tailwind/second-app');
} else {
	colors = require('./lib/tailwind/default');
}
// To overwrite any default value, refer to:
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and update the exported module with the values you want changed

// Overwrite the default colors with custom values
// you can change color values or even names
// since there are a lot colors in the system, you can pick n choose those needed by the project
//

module.exports = {
	theme: {
		fill: {
			current: 'currentColor',
		},
		stroke: {
			current: 'currentColor',
		},
		themeVariants: ['dark'],
		colors: colors,
		interFontFeatures: {
			default: ['calt', 'liga', 'kern'],
			numeric: ['tnum', 'salt', 'ss02'],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '6rem',
			'8xl': '8rem',
			'9xl': '9rem',
			'10xl': '10rem',
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				light: { raw: '(prefers-color-scheme: light)' },
				dark: { raw: '(prefers-color-scheme: dark)' },
			},
		},
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
		borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
		fill: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
		stroke: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
		strokeWidth: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
		textColor: [
			'responsive',
			'hover',
			'focus',
			'focus-within',
			'group-hover',
			'odd',
			'even',
			'active',
			'disabled',
			'dark',
			'dark:hover',
			'dark:focus',
			'dark:focus-within',
			'dark:group-hover',
			'dark:odd',
			'dark:even',
			'dark:active',
			'dark:disabled',
		],
		borderStyle: ['responsive', 'dark'],
	},
	plugins: [
		require('@tailwindcss/ui'),
		require('tailwindcss-multi-theme'),
		require('tailwindcss-font-inter')({
			// a: -0.0223,
			// b: 0.185,
			// c: -0.1745,
			// baseFontSize: 16,
			// baseLineHeight: 1.5,
			importFontFace: true,
			disableUnusedFeatures: true,
		}),
	],
};
