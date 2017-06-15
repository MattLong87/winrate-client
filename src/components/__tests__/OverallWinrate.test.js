import React from 'react';
import {shallow} from 'enzyme';

import OverallWinrate from '../OverallWinrate';

describe('<OverallWinrate />', () => {
    it('Renders without crashing', () => {
        shallow(<OverallWinrate />);
    })
})