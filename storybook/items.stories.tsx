import Logo from '@component/item/logo';
import LogoLink from '@component/item/logo_link';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

const logoProps = {
	wClass: 'w-16',
	hClass: 'h-16',
	colorClass: '',
};

storiesOf('Logo', module)
	.add('Logo mono single', () => <Logo {...logoProps} />)
	.add(
		'logo mono Link',
		() => (
			<div>
				<LogoLink wClass="w-16" path="/" />
			</div>
		),
		{ notes: 'something' },
	);

// import * as React from 'react'

// export default { title: 'Logo' };
// export const LogoSingleton= () => (<Logo />);

// (
//   <div>
//     <LogoLink wClass="w-16" path="/" />
//   </div>
// )
