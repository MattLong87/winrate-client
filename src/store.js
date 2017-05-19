import {createStore} from 'redux'

import {winrateReducer} from './reducers/winrateReducer';

export default createStore(winrateReducer);