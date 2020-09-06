import Logo from '@component/item/logo';
import Link from 'next/link';
import * as React from 'react';

type Props = {
	path?: string;
	label?: string;
	color?: string;
	size?: string;
};

const LogoLink: React.FunctionComponent<Props> = ({
	path = '/',
	label = 'logo link',
	color,
	size,
}) => (
	<Link href={path}>
		<a aria-label={label} className="">
			{/* color and size must be css classes */}
			<Logo color={color} size={size} />
		</a>
	</Link>
);

export default LogoLink;
