import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://sucsandsched.herokuapp.com/api'
        // baseURL: `http://localhost:9000/api`
    })
}

export default axiosWithAuth