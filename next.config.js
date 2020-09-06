// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const isProd = process.env.NODE_ENV === 'production';
const localeSubpaths = {};

module.exports = {
	env: {
		platform: process.env.NEXT_PUBLIC_PLATFORM,
	},
	basePath: isProd ? '' : '',
	rewrites: async () => nextI18NextRewrites(localeSubpaths),
	publicRuntimeConfig: {
		localeSubpaths,
	},
};
