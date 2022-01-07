import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Register(props) {

    const [formValues, setFormValues] = useState({ username: '', password: '' })

    const navigate = useNavigate()

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit')

        // axios.post('url', formValues)
        //     .then()
        //     .catch()
    }

    //temporary - remove this 
    useEffect(() => {
        localStorage.setItem('token', 420)
    })

    return (
        <Container className='text-center mt-4 d-flex flex-column align-items-center'>
            <form 
                className='w-50'
                onSubmit={handleSubmit}
            >
                <div className='form-group'>
                    <h3>welcome back</h3>
                    <input 
                        type='text'
                        placeholder='username'
                        className='form-control my-1'
                        value={formValues.username}
                        onChange={handleChange}
                    ></input>
                    <input 
                        // remove comment below when live
                        // type='password'
                        placeholder='password'
                        className='form-control my-1'
                        value={formValues.password}
                        onChange={handleChange}
                    ></input>
                    <Button 
                        className='w-50 my-1'
                        variant='light'
                        type='submit'
                    >
                        create account
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default Register;