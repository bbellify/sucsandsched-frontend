import { combineReducers } from 'redux';

// combine reducers here
// import movieReducer from './movieReducer';
import sucsReducer from './sucsReducer'

const rootReducer = combineReducers({
    sucs: sucsReducer
})

export default rootReducer