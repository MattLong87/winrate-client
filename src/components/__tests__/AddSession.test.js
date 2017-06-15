import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddSession} from '../AddSession';

describe('<AddSession />', () => {
    it('Renders without crashing', () => {
        shallow(<AddSession />);
    })

    it('Adds a player to the state when player is added', () => {
        const wrapper = mount(<AddSession />);
        wrapper.find('#add-player').node.value = "NewPlayer";
        wrapper.find('#add-player').simulate('keyDown', {keyCode: 13});
        expect(wrapper.state('allPlayers')).toHaveLength(1);
    })
})