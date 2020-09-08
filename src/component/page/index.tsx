import { Button, useColorMode } from '@chakra-ui/core';
import Head from 'next/head';
import * as React from 'react';

type Props = {
	title?: string;
};

const Page: React.FunctionComponent<Props> = ({
	children,
	title = 'This is the default title',
}) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const toggle = () => {
		toggleColorMode();
		if (colorMode === 'light') {
			document.documentElement.classList.add('theme-dark');
			document.body.classList.add('theme-dark');
		} else {
			document.documentElement.classList.remove('theme-dark');
			document.body.classList.remove('theme-dark');
		}
	};
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="relative overflow-hidden h-screen text-bg-900 bg-bg-100 dark:text-bg-100 dark:bg-bg-900">
				<Button onClick={toggle}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
				<div className="max-w-screen-xl mx-auto h-screen">{children}</div>
			</div>
		</div>
	);
};

export default Page;
