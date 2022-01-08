import { 
    SET_USERNAME,
    SET_FIRST_NAME,
    GET_SUCCESS,
    GET_START,
    GET_ERROR
} from '../actions/userActions'


const initialState = {
    username: '',
    first_name: '',
    user: {},
    isFetching: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case(SET_USERNAME):
            return({
                ...state,
                username: action.payload
            })
        case(SET_FIRST_NAME):
            return({
                ...state,
                first_name: action.payload
            })
        case(GET_SUCCESS):
            return({
                ...state,
                user: action.payload,
                isFetching: false
            })
        case(GET_START):
            return({
                ...state,
                isFetching: true
            })
        case(GET_ERROR):
            return({
                ...state,
                isFetching: false
            })
        default:
            return state;
    }
}

export default userReducer