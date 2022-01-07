import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'


export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchSuccess = (comic) => {
    return({type:FETCH_SUCCESS, payload: comic})
}

export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

export const getSucs = () => {
    return(dispatch) => {
        dispatch(fetchStart())

        axios.get('https://sucsandsched.herokuapp.com/api/sucs')
            .then(res => {
                dispatch(fetchSuccess(res.data))
                console.log(res.data)
            })
            .catch(err => {
                dispatch(fetchError(err))
                console.log(err)
            })
    }
}