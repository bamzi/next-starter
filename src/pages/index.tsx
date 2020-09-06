import HomeHero from '@component/HomeHero';
import Page from '@component/page';
import { withTranslation } from '@helper/i18n';
import { NextPage } from 'next';
import * as React from 'react';
// import {StreamlineIcon} from '@streamlinehq/streamline-icons-react'

const IndexPage: NextPage = () => {
	return (
		<Page title="Next.js temp">
			<HomeHero />
		</Page>
	);
};

IndexPage.getInitialProps = async () => ({
	namespacesRequired: ['main'],
});
export default withTranslation()(IndexPage);
