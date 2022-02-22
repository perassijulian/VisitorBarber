import search from './search';
import users from './users';
import Auth from './Auth';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    search,
    users,
    Auth
})

export default reducers;