// import '@streamlinehq/streamline-icons-react/dist/components/StreamlineIcon.css'
import '@styles/index.css';

import { appWithTranslation } from '@helper/i18n';
import App, { AppProps } from 'next/app';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function reportWebVitals(metric) {
	// if needing to enhance metrics refer to
	// https://nextjs.org/docs/advanced-features/measuring-performance
	console.log(metric);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
	if (!pageProps.namespacesRequired) {
		pageProps.namespacesRequired = ['main'];
	}
	return <Component {...pageProps} />;
};
MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};
export default appWithTranslation(MyApp);
