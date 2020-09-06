import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withLinks } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { create } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/index.css';

addParameters({
	options: {
		theme: create({
			base: 'dark',
			brandTitle: 'My Appa',
			brandUrl: 'https://my-app.example.com',
			brandImage: `data:image/svg+xml;charset=utf-8,<svg
    width="50"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
	<path
	fillRule="evenodd"
	d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
	clipRule="evenodd"
/>
  </svg>`,
		}),
	},
});

/* this MUST always be the first decorator */
addDecorator(
	withInfo({
		inline: false,
		header: false,
		maxPropsIntoLine: 1,
	}),
);

/* load the accessibility check addon */
addDecorator(withA11y);

/* load the knobs addon */
addDecorator(withKnobs);

/* load the links addon */
addDecorator(withLinks);

/* load the notes addon */
addDecorator(withNotes);

/* add a responsive viewport */
const newViewports = {
	bp768: {
		name: 'Breakpoint: 768px',
		styles: {
			width: '768px',
			height: '432px',
		},
	},
	bp992: {
		name: 'Breakpoint: 992px',
		styles: {
			width: '992px',
			height: '558px',
		},
	},
	bp1200: {
		name: 'Breakpoint: 1200px',
		styles: {
			width: '1200px',
			height: '675px',
		},
	},
};

addParameters({
	viewport: {
		viewports: {
			...newViewports,
			...INITIAL_VIEWPORTS,
		},
	},
});

/* configure(require.context('../storybook', true, /\.stories\.tsx?$/), module)*/

/* load all stories in the story folder */
const req = require.context('../storybook', true, /\.stories\.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
