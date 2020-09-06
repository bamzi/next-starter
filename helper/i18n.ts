import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';

import {
	appWithTranslation,
	config,
	i18n,
	initPromise,
	Link,
	Router,
	Trans,
	useTranslation,
	withTranslation,
} from '../i18n';

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
// Add language info to the custom _document header
export interface DocumentLanguageProps {
	languageDirection: string; // right to left (arabic etc.) or left to right (latin languages etc.)
	language: string;
}
interface HtmlLanguageProps {
	dir: string;
	lang: string;
}

// i18next-http-middleware is in charge of enhancing the req object
interface IncomingMessageWithI18n extends IncomingMessage {
	language?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	i18n: any;
}
export const i18nPropsFromCtx = (ctx: NextPageContext): Partial<HtmlLanguageProps> => {
	if (!(ctx && ctx.req && (ctx.req as IncomingMessageWithI18n).language)) return {};
	const req = ctx.req as IncomingMessageWithI18n;
	return {
		lang: req.language,
		dir: req.i18n && req.i18n.dir(req.language),
	};
};
