module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.jest.json',
			babelConfig: true,
			diagnostics: false,
		},
	},
	coveragePathIgnorePatterns: ['/node_modules/', '/storybook/'],
	setupFilesAfterEnv: ['<rootDir>/lib/testing/setupTests.ts'],
	coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test/mocks.ts',
		'\\.(css|less|scss|html)$': '<rootDir>/test/mocks.ts',
		'^@(Test)(.*)$': '<rootDir>/test/$2',
		'^@(Server)(.*)$': '<rootDir>/server/$2',
		'^@([A-Z].*)$': '<rootDir>/src/$1',
	},
	preset: 'ts-jest',
};

// module.exports = {
// 	roots: ['<rootDir>'],
// 	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
// 	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
// 	transform: {
// 		'^.+\\.(ts|tsx)$': 'babel-jest',
// 	},
// 	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
// 	moduleNameMapper: {
// 		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
// 		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
// 	},
// 	preset: 'ts-jest',
// 	testEnvironment: 'node',
// 	globals: {
// 		// we must specify a custom tsconfig for tests because we need the typescript transform
// 		// to transform jsx into js rather than leaving it jsx such as the next build requires.  you
// 		// can see this setting in tsconfig.jest.json -> "jsx": "react"
// 		'ts-jest': {
// 			tsConfig: 'tsconfig.jest.json',
// 		},
// 	},
// };
