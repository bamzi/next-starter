import * as React from 'react';

type Props = {
	size?: string;
	color?: string;
};

function buildClass(c, s) {
	return 'fill-current ' + c + ' ' + s;
}

const Logo: React.FunctionComponent<Props> = ({
	size = 'w-16 h-16',
	color = 'text-first-700 hover:text-first-500 dark:text-first-300 dark:hover:text-first-100',
}) => {
	const firstApp = (
		<>
			<svg
				fill="currentColor"
				className={buildClass(color, size)}
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
					clipRule="evenodd"
				/>
			</svg>
		</>
	);
	const secondApp = (
		<>
			<svg
				fill="currentColor"
				className={'question-mark-circle ' + buildClass(color, size)}
				viewBox="0 0 18 18"
			>
				<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
				<path
					fillRule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
					clipRule="evenodd"
				></path>
			</svg>
		</>
	);
	const isfirstApp = process.env.platform === 'firstApp';
	const logo = isfirstApp ? firstApp : secondApp;
	return logo;
};

export default Logo;
