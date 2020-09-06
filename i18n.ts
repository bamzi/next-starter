// import LanguageDetector from 'i18next-browser-languagedetector';
import NextI18Next from 'next-i18next';
import path from 'path';
import { initReactI18next } from 'react-i18next';

// import NextConfig from 'next/config';
// const { localeSubpaths } = NextConfig().publicRuntimeConfig;
// const isProd = process.env.NODE_ENV === 'production';

const {
	Trans,
	Link,
	Router,
	i18n,
	initPromise,
	config,
	useTranslation,
	withTranslation,
	appWithTranslation,
} = new NextI18Next({
	use: [initReactI18next], //LanguageDetector,
	preload: ['en'],
	defaultLanguage: 'en',
	fallbackLng: 'en',
	defaultNS: 'main',
	otherLanguages: ['en', 'fr', 'es', 'en-GB', 'jp', 'cn', 'kr', 'pr', 'de', 'it'],
	// localeSubpaths: { localeSubpaths },
	localePath: path.resolve('./public/lang'), // add alt path if isProd
	browserLanguageDetection: true,
	serverLanguageDetection: true,
	detection: {
		order: ['cookie', 'localStorage'],
		lookupCookie: 'lang',
		lookupLocalStorage: 'lang',
		caches: ['cookie', 'localStorage'],
	},
	react: {
		// trigger a rerender when language is changed
		bindI18n: 'languageChanged',
		// we're NOT using suspsense to detect when the translations have loaded
		useSuspense: false,
	},
});

export {
	Trans,
	Link,
	Router,
	i18n,
	initPromise,
	config,
	useTranslation,
	withTranslation,
	appWithTranslation,
};
