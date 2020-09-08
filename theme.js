import { theme as chakraTheme } from '@chakra-ui/core';

let colors;
if (process.env.NEXT_PUBLIC_PLATFORM === 'app1') {
	colors = require('./lib/palette/app1');
} else if (process.env.NEXT_PUBLIC_PLATFORM === 'app2') {
	colors = require('./lib/palette/app2');
} else {
	colors = require('./lib/palette/default');
}

const systemFontStack = [
	'Inter var',
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Roboto',
	'"Helvetica Neue"',
	'Arial',
	'"Noto Sans"',
	'sans-serif',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
	'"Noto Color Emoji"',
	'sans-serif',
].join(',');

const systemMonoFontStack = [
	'"SFMono-Regular"',
	'Menlo',
	'Consolas',
	'"Liberation Mono"',
	'Courier',
	'monospace',
].join(',');

export const theme = {
	...chakraTheme,
	colors: colors,
	fontSize: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1rem',
		md: '1rem',
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
	fonts: {
		body: systemFontStack,
		heading: systemFontStack,
		mono: systemMonoFontStack,
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
};
