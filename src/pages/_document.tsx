import { ColorModeScript } from '@chakra-ui/core';
import { DocumentLanguageProps, i18nPropsFromCtx } from '@helper/i18n';
import Document, {
	Head,
	Html,
	Main,
	NextScript,
	//DocumentInitialProps,
} from 'next/document';
import React from 'react';

interface VNSDocumentProps {
	i18nDocumentProps: Partial<DocumentLanguageProps>;
}
export default class MyDocument extends Document<VNSDocumentProps> {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		const { i18nDocumentProps } = this.props;
		return (
			<Html {...i18nDocumentProps} data-app-version={process.env.NEXT_PUBLIC_PKGINFO_VERSION}>
				<Head>
					{/* PWA primary color */}
					<meta name="theme-color" content="" />
					{/* <script src="prefer.js" /> */}
				</Head>
				<body>
					<ColorModeScript defaultColorMode="system" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Run the renderer
	const initialProps = await Document.getInitialProps(ctx);

	// i18n
	const i18nDocumentProps = i18nPropsFromCtx(ctx);

	return {
		...initialProps,
		i18nDocumentProps,
	};
};
