import React from 'react';
import {shallow, mount} from 'enzyme';

import {Login} from '../Login';

describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    })
})