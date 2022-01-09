import axios from 'axios'

import { BASE_URL } from '../constants'


//should change fetch here to sucs, something more specific. also add note template that these should be more specific, perhaps leave eg FETCH_START = 'FETCH_START' (and others) in template is ok, with note about being more specific
export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchSuccess = (sucs) => {
    return({type:FETCH_SUCCESS, payload: sucs})
}

export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

export const getSucs = () => {
    return(dispatch) => {
        dispatch(fetchStart())

        axios.get(`${process.env.REACT_APP_BASE_URL}/api/sucs`)
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}