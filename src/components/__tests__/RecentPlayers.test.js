import React from 'react';
import {shallow} from 'enzyme';

import RecentPlayers from '../RecentPlayers';

describe('<RecentPlayers />', () => {
    it('Renders without crashing', () => {
        shallow(<RecentPlayers />);
    })
})