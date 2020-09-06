import '@storybook/addon-notes/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-options/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-viewport/register';

import { addons } from '@storybook/addons';

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'bottom',
	sidebarAnimations: true,
	enableShortcuts: true,
	isToolshown: true,
	// theme: themes.dark,
	selectedPanel: undefined,
	initialActive: 'sidebar',
	showRoots: false,
});
