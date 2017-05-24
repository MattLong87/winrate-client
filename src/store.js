import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {winrateReducer} from './reducers/winrateReducer';

export default createStore(winrateReducer, applyMiddleware(thunk));