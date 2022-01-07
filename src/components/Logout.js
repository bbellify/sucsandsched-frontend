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
        }, 3000)
    })

    return (
        <div className='text-center'>
            <h3>no days off</h3>
            <img src={lasers} alt='no days off' width='70%'/>
            
        </div>
    );
}

export default Logout;