import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

import { setUsername } from '../actions/userActions'

//should change fetch here to sucs, something more specific. also add note template that these should be more specific, perhaps leave eg FETCH_START = 'FETCH_START' (and others) in template is ok, with note about being more specific
export const FETCH_START = 'FETCH_START'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SUCS_SUCCESS = 'SUCS_SUCCESS'
export const SUCS_RES_SUCCESS = 'SUCS_RES_SUCCESS'
export const SUCS_ALL_SUCCESS = 'SUCS_ALL_SUCCESS'

export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

export const sucsSuccess = (sucs) => {
    return({type:SUCS_SUCCESS, payload: sucs})
}

export const sucsResSuccess = (sucs) => {
    return({type:SUCS_RES_SUCCESS, payload: sucs})
}

export const sucsResAllSuccess = (sucs) => {
    return({type: SUCS_ALL_SUCCESS, payload: sucs})
}

export const getSucs = () => {
    return(dispatch) => {
        dispatch(fetchStart())

        axios.get(`${process.env.REACT_APP_BASE_URL}/api/sucs`)
            .then(res => {
                dispatch(sucsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}

export const getSucsRes = () => {
    return(dispatch) => {
        dispatch(fetchStart())

        axiosWithAuth()
            .get('/sucs/user')
            .then( res => {
                dispatch(setUsername(res.data.username))
                dispatch(sucsResSuccess(res.data.sucs))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}

export const logSucs = (day) => {
    return(dispatch) => {
        dispatch(fetchStart()
        )
        axiosWithAuth()
            .post('/sucs/log', {day})
            .then( res => {
                dispatch(sucsResSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}

export const toggleSucs = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        axiosWithAuth()
            .post('/sucs/toggle')
            .then( res => {
                getSucsRes()
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}

// will need to finish below function for toggle button, import in SucsComponent. in middleware or model I will probably have to do some weird shit to deal with the username problem for all the other users hmmm

// export const getSucsAll = () => {
//     return(dispatch) => {
//         dispatch(fetchStart())
//         console.log('in get sucs all')
// 
//         axiosWithAuth()
//             .get('/sucs/user')
//             .then( res => {
//                 dispatch(setUsername(res.data.username))
//                 dispatch(sucsResSuccess(res.data.sucs))
//             })
//             .catch(err => {
//                 dispatch(fetchError(err))
//             })
//     }
// }