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

        // what is going on with BASE_URL ... axios get works with deployed backend url
        // might have to add http:// to BASE_URL
        axios.get(
            (process.env.BASE_URL ? `${process.env.BASE_URL}/api/sucs` : 
            `http://${process.env.REACT_APP_BASE_URL}/api/sucs`)
            // || `http://${process.env.REACT_APP_BASE_URL_DEV}/api/sucs`
            )
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                console.log(process.env.BASE_URL)
                console.log(process.env.REACT_APP_BASE_URL)
                dispatch(fetchError(err))
            })
    }
}