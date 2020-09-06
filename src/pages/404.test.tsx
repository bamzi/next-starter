import { shallow } from 'enzyme';
import React from 'react';

import C404 from './404';

describe('With Enzyme', () => {
	it('App test example', () => {
		const app = shallow(<C404 />);
		expect(app.find('main').exists());
	});
});
