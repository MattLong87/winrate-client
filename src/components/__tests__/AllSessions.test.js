import React from 'react';
import {shallow} from 'enzyme';

import {AllSessions} from '../AllSessions';

describe('<AllSessions />', () => {
    it('Renders without crashing', () => {
        shallow(<AllSessions user={{sessions: []}} />);
    })
})