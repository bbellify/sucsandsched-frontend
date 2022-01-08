import axios from 'axios'

import { BASE_URL } from '../constants'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchSuccess = (sucs) => {
    console.log('in fetch success')
    return({type:FETCH_SUCCESS, payload: sucs})
}

export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

export const getSucs = () => {
    return(dispatch) => {
        console.log('in getSucs')
        dispatch(fetchStart())

        axios.get(
            // toggle for development
            'http://localhost:9000/api/sucs'
            // `${BASE_URL}/api/sucs`
            )
            .then(res => {
                console.log('in getSucs then')
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}