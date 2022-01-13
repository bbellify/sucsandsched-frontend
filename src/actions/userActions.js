import axiosWithAuth from '../utils/axiosWithAuth'

export const GET_START = 'GET_START'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_ERROR = 'GET_ERROR'
export const SET_USERNAME = 'SET_USERNAME'
export const SET_FIRST_NAME = 'SET_FIRST_NAME'

export const getStart = () => {
    return({type:GET_START})
}
 
export const getSuccess = (user) => {
    return({type:GET_SUCCESS, payload: user})
}

export const getError = (error) => {
    return({type:GET_ERROR, payload: error})
}

export const setUsername = (username) => {
    return({type:SET_USERNAME, payload: username})
}

export const setFirstName = (first_name) => {
    return({type:SET_FIRST_NAME, payload: first_name})
}

export const getUser = () => {
    return(dispatch) => {
        dispatch(getStart())
        axiosWithAuth()
            .get(`/account`)
            .then(res => {
                dispatch(getSuccess(res.data))
            })
            .catch(err => {
                dispatch(getError(err))
            })
    }
}