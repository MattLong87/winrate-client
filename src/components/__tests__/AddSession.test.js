import React from 'react';
import {shallow} from 'enzyme';

import {AddSession} from '../AddSession';

describe('<AddSession />', () => {
    it('Renders without crashing', () => {
        shallow(<AddSession />);
    })
})