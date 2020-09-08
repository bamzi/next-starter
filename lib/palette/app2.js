// eslint-disable-next-line @typescript-eslint/no-var-requires
const palette = require('@ky-is/tailwind-color-palette');
const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// brand colors c1-c5
const c1 = palette('#931052', { name: 'c1', grayscale: false, ui: false, colorscale: scale });
const c2 = palette('#819310', { name: 'c2', grayscale: false, ui: false, colorscale: scale });
const c3 = palette('#cf54a8', { name: 'c3', grayscale: false, ui: false, colorscale: scale });
const c4 = palette('#5845ba', { name: 'c4', grayscale: false, ui: false, colorscale: scale });
const c5 = palette('#03aa78', { name: 'c5', grayscale: false, ui: false, colorscale: scale });

// white
const w = palette('#f0f0f1', { name: 'w', grayscale: false, ui: false, colorscale: scale });
// gray
const g = palette('#99999e', { name: 'g', grayscale: false, ui: false, colorscale: scale });
// black
const b = palette('#333337', { name: 'b', grayscale: false, ui: false, colorscale: scale });

// color for ui alert, warn, info, success
const red = palette('#b62616', { name: 'red', grayscale: false, ui: false, colorscale: scale });
const orange = palette('#b04c21', {
	name: 'orange',
	grayscale: false,
	ui: false,
	colorscale: scale,
});
const green = palette('#51780d', { name: 'green', grayscale: false, ui: false, colorscale: scale });
const blue = palette('#0d7896', { name: 'blue', grayscale: false, ui: false, colorscale: scale });

let colors = {
	transparent: 'transparent',
	current: 'currentColor',
	...c1,
	...c2,
	...c3,
	...c4,
	...c5,
	...w,
	...g,
	...b,
	...red,
	...orange,
	...green,
	...blue,
};

module.exports = colors;
