import React from 'react';
import {shallow} from 'enzyme';

import RecentSessions from '../RecentSessions';

describe('<RecentSessions />', () => {
    it('Renders without crashing', () => {
        shallow(<RecentSessions sessions={[]} />);
    })
})