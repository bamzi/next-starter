/* eslint-disable @typescript-eslint/ban-types */
import { useTranslation } from '@helper/i18n';
import * as React from 'react';

import LogoLink from './item/logo_link';

type Props = {};
// eslint-disable-next-line no-empty-pattern
const HomeHero: React.FunctionComponent<Props> = ({}) => {
	const { t } = useTranslation();
	return (
		<>
			<div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
				<div className="relative pt-6 px-4 sm:px-6 lg:px-8 bg-gray-300 dark:bg-gray-900">
					<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
						<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<LogoLink path="/" />
								<div className="-mr-2 flex items-center md:hidden">
									<button
										type="button"
										className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
										id="main-menu"
										aria-label="Main menu"
										aria-haspopup="true"
									>
										<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden md:block md:ml-10 md:pr-4 flex-grow text-right">
							<a
								href="/something"
								className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out dark:text-red-500"
							>
								{t('main:test.item1')}
							</a>
						</div>
					</nav>
				</div>

				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-md">
						<div
							className="rounded-lg bg-gray-100 dark:bg-black shadow-xs overflow-hidden"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="main-menu"
						>
							<div className="px-5 pt-4 flex items-center justify-between">
								<div>
									<LogoLink path="/" />
								</div>
								<div className="-mr-2">
									<button
										type="button"
										className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
										aria-label="Close menu"
									>
										<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className="px-2 pt-2 pb-3"></div>
							<div>
								<a
									href="/#"
									className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
									role="menuitem"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</div>

				<main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
					<div className="sm:text-center lg:text-left">
						<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl sm:leading-none md:text-6xl">
							The starting template to build production grade web apps
						</h2>
						<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
							commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div className="rounded-md shadow">
								<a
									href="/#"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
								>
									Learn more
								</a>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="/#"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
								>
									Get started
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

// HomeHero.getInitialProps = async () => ({
// 	namespacesRequired: ['main'],
// });
export default HomeHero;
