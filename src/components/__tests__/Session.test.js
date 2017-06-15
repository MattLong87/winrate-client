import React from 'react';
import {shallow} from 'enzyme';

import {Session} from '../Session';

describe('<Session />', () => {
    it('Renders without crashing', () => {
        shallow(<Session players={[]} />);
    })
})