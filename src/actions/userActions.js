import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SET_USERNAME = 'SET_USERNAME'

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

export const getUser = () => {
    return(dispatch) => {
        // dispatch(fetchStart())

        
        console.log('in action')
        // axios.create()

            // .then(res => {
            //     dispatch(fetchSuccess(res.data))
            // })
            // .catch(err => {
            //     dispatch(fetchError(err))
            // })
    }
}