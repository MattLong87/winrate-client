import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from '../Dashboard';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        const user = {
            sessions: [],
            name: {
                firstName: "",
                lastName: ""
            }
        }
        shallow(<Dashboard user={user} />);
    })
})