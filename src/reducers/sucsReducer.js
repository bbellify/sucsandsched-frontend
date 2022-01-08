import { 
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
} from './../actions/sucsActions'


const initialState = {
    sucs: [],
    isFetching: false,
    error: ''
}



const sucsReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                sucs: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_ERROR):
            return({
                ...state,
                isFetching: false,
                error: `${action.payload}`
            })
        default:
            return state;
    }
}

export default sucsReducer