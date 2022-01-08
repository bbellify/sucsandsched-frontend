import { combineReducers } from 'redux';

// combine reducers here
import sucsReducer from './sucsReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
    sucs: sucsReducer,
    user: userReducer

})

export default rootReducer