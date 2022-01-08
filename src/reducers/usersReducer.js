import { 
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SET_USERNAME,
} from '../actions/userActions'


const initialState = {
    username: 'test in reducer',
    user: {}
}



const userReducer = (state = initialState, action) => {
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
                error: `${action.payload})`
            })
        case(SET_USERNAME):
            return({
                ...state,
                username: action.payload
            })
        default:
            return state;
    }
}

export default userReducer