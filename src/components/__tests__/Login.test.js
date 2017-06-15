import React from 'react';
import {shallow} from 'enzyme';

import {Login} from '../Login';

describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    })
})