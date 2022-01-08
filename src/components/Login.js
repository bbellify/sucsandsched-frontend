import React, { useState } from 'react';
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';

import { setUsername, setFirstName } from '../actions/userActions'

import { BASE_URL } from '../constants/index'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Login(props) {

    
    // error states
    const [formValues, setFormValues] = useState({ username: '', password: '' })

    const dispatch = useDispatch()

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(
            // `${BASE_URL}/auth/login`
            'http://localhost:9000/auth/login'
            , formValues)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                dispatch(setUsername(res.data.username))
                dispatch(setFirstName(res.data.first_name))
                navigate('/my-account')
                // for future reference - navigate() appears to have a problem with template literals, better to just do string concatenation 
            })
            .catch()
    }

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
                    type='password'
                    placeholder='password'
                    className='form-control my-1'
                    value={formValues.password}
                    onChange={handleChange}
                ></input>
                
                {/* alerts goes here
                    one for incorrect login
                    one for form validation
                */}

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