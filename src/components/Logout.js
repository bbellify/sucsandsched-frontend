import React, { useEffect } from 'react';
import { useNavigate } from "react-router";


import lasers from '../assets/lasers.jpeg'

function Logout(props) {

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    useEffect(()=>{
        setTimeout(() => {
            navigate('/')
        }, 1500)
    })

    return (
        <div className='text-center my-2'>
            <h3>no days off</h3>
            <img src={lasers} alt='no days off' width='70%'/>
            
        </div>
    );
}

export default Logout;