import { CASE_ONE } from './../actions/sucsActions'


const initialState = {
    state: {}
}



const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(CASE_ONE):
        return({
            ...state,
        })
        default:
            return state;
    }
}

export default favoritesReducer