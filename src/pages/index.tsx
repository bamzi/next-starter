import HomeHero from '@component/HomeHero';
import Page from '@component/page';
import { useTranslation, withTranslation } from '@helper/i18n';
import { titleCase } from '@lib/title-case';
import { NextPage } from 'next';
import * as React from 'react';
// import {StreamlineIcon} from '@streamlinehq/streamline-icons-react'

const IndexPage: NextPage = () => {
	const { t } = useTranslation();
	const title = titleCase(process.env.NEXT_PUBLIC_PLATFORM) + ' | ' + t('main:app.title');
	return (
		<Page title={title}>
			<HomeHero />
		</Page>
	);
};

IndexPage.getInitialProps = async () => ({
	namespacesRequired: ['main', 'error'],
});
export default withTranslation()(IndexPage);
