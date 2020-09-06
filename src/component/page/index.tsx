import Head from 'next/head';
import * as React from 'react';

type Props = {
	title?: string;
};

const Page: React.FunctionComponent<Props> = ({
	children,
	title = 'This is the default title',
}) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div className="relative bg-bg dark:bg-bgdark overflow-hidden h-screen">
			<div className="max-w-screen-xl mx-auto h-screen">{children}</div>
		</div>
	</div>
);

export default Page;
