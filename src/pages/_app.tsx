// import '@streamlinehq/streamline-icons-react/dist/components/StreamlineIcon.css'
import '@styles/index.css';

import { ChakraProvider } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { merge } from '@chakra-ui/utils';
import { appWithTranslation } from '@helper/i18n';
import { theme as themeChakra } from '@lib/theme-chakra';
import App, { AppProps } from 'next/app';
import React from 'react';

merge(theme, themeChakra);

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
	return (
		<ChakraProvider resetCSS>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};
MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};
export default appWithTranslation(MyApp);
