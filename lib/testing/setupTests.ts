// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
// #region Global Imports
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter.default() });

// import dotenv from 'dotenv';
// import { setConfig } from 'next/config';
import nock from 'nock';
// #endregion Global Imports

// dotenv.config({ path: '.env.test' });

// setConfig({
// 	publicRuntimeConfig: {
// 		API_URL: process.env.API_URL,
// 		API_KEY: process.env.API_KEY,
// 	},
// });

nock('http://localhost:10001')
	.get('/')
	.query({ api_key: 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo', hd: true })
	.reply(200, {});
