import React, { useEffect } from 'react';
import { useNavigate } from "react-router";

import { connect } from 'react-redux'
import { setUsername } from '../actions/userActions';

import lasers from '../assets/lasers.jpeg'

// set up so Logout only renders if you're actually logged in?

function Logout(props) {

    const navigate = useNavigate()

    useEffect(() => {
        props.setUsername('')
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

export default connect(null, { setUsername })(Logout);