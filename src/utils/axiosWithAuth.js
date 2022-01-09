import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: `${process.env.REACT_APP_BASE_URL}/api`
    })
}

export default axiosWithAuth