import Page from '@component/page';
import { useTranslation } from '@helper/i18n';
import React, { FC } from 'react';

const C404: FC = () => {
	const { t } = useTranslation();
	return (
		<Page>
			<main>
				<p>error</p>
				<p>
					<br />
					<br />
					¯\_(ツ)_/¯
					<br />
					<br />
				</p>
				<p>{t('error:e404.pageNotFound')}</p>
			</main>
		</Page>
	);
};

export default C404;
