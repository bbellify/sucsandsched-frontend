import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SET_USERNAME = 'SET_USERNAME'
export const SET_FIRST_NAME = 'SET_FIRST_NAME'

export const fetchStart = () => {
    return({type:FETCH_START})
}
 
export const fetchSuccess = (comic) => {
    return({type:FETCH_SUCCESS, payload: comic})
}

export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

export const setUsername = (username) => {
    return({type:SET_USERNAME, payload: username})
}

export const setFirstName = (first_name) => {
    return({type:SET_FIRST_NAME, payload: first_name})
}

export const getUser = (username) => {
    return(dispatch) => {
        dispatch(fetchStart())

        console.log('in action')
        axiosWithAuth()
            .get(`/account/${username}`)
            .then(res => {
                console.log(username)
                console.log(res)
                //dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                console.log(username)
                console.log('in catch')
                dispatch(fetchError(err))
            })
    }
}