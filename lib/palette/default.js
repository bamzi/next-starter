// eslint-disable-next-line @typescript-eslint/no-var-requires
const palette = require('@ky-is/tailwind-color-palette');
const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// brand colors c1-c5
const c1 = palette('#391d86', { name: 'c1', grayscale: false, ui: false, colorscale: scale });
const c2 = palette('#03aa83', { name: 'c2', grayscale: false, ui: false, colorscale: scale });
const c3 = palette('#4b40b5', { name: 'c3', grayscale: false, ui: false, colorscale: scale });
const c4 = palette('#823493', { name: 'c4', grayscale: false, ui: false, colorscale: scale });
const c5 = palette('#b48322', { name: 'c5', grayscale: false, ui: false, colorscale: scale });

// white
const w = palette('#f0f0f1', { name: 'w', grayscale: false, ui: false, colorscale: scale });
// gray
const g = palette('#99999e', { name: 'g', grayscale: false, ui: false, colorscale: scale });
// black
const b = palette('#333337', { name: 'b', grayscale: false, ui: false, colorscale: scale });

// color for ui alert, warn, info, success
const red = palette('#9e2e37', { name: 'red', grayscale: false, ui: false, colorscale: scale });
const orange = palette('#9c4630', {
	name: 'orange',
	grayscale: false,
	ui: false,
	colorscale: scale,
});
const green = palette('#1f770d', { name: 'green', grayscale: false, ui: false, colorscale: scale });
const blue = palette('#145c90', { name: 'blue', grayscale: false, ui: false, colorscale: scale });

let colors = {
	transparent: 'transparent',
	current: 'currentColor',
	black: '#000',
	white: '#fff',
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
