import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import { BASE_URL } from '../constants/index'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Login(props) {

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

        axios.post(`${BASE_URL}/auth/login`, formValues)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                navigate('/account')
                // going to have to dispatch a users action I think
            })
            .catch()
    }

    //temporary - remove this 
    useEffect(() => {
        localStorage.setItem('token', 420)
    })

    return (
        <Container className='mt-4 d-flex flex-column align-items-center col-md-6'>
            <form 
                onSubmit={handleSubmit}
                className='text-center w-75'

            >
                <h3>welcome back</h3>
                <input
                    name='username'
                    type='text'
                    placeholder='username'
                    className='form-control my-1'
                    value={formValues.username}
                    onChange={handleChange}
                ></input>
                <input 
                    name='password'
                    remove comment below when live
                    type='password'
                    placeholder='password'
                    className='form-control my-1'
                    value={formValues.password}
                    onChange={handleChange}
                ></input>
                
                {/* alert goes here */}

                <Button 
                    className='w-100 w-md-50 my-1'
                    variant='light'
                    type='submit'
                >
                    login
                </Button>
                <LinkContainer className='w-100' to='/register'>
                    <Button variant='light'>
                        need an account?
                    </Button>
                </LinkContainer>
            </form>
        </Container>
    );
}

export default Login;