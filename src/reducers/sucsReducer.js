import { 
    FETCH_START,
    FETCH_ERROR,
    SUCS_SUCCESS,
    SUCS_RES_SUCCESS,
    SUCS_ALL_SUCCESS,
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
        case(FETCH_ERROR):
            return({
                ...state,
                isFetching: false,
                error: `${action.payload}`
            })
        case(SUCS_SUCCESS):
            return({
                ...state,
                sucs: action.payload,
                isFetching: false,
                error: ''
            })
        case(SUCS_RES_SUCCESS):
            return({
                ...state,
                sucs: action.payload,
                isFetching: false,
                error: ''
            })
        case(SUCS_ALL_SUCCESS):
            return({
                ...state,
                sucs: action.payload,
                isFetching: false,
                error: ''
            })
        
        default:
            return state;
    }
}

export default sucsReducer