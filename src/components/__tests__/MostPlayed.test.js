import React from 'react';
import {shallow} from 'enzyme';

import MostPlayed from '../MostPlayed';

describe('<MostPlayed />', () => {
    it('Renders without crashing', () => {
        shallow(<MostPlayed />);
    })
})