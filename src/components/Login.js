import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

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

        // axios.post('url', formValues)
        //     .then()
        //     .catch()
    }

    //temporary - remove this 
    useEffect(() => {
        localStorage.setItem('token', 420)
    })

    return (
        <Container className='mt-4 text-center'>
            <form 
                onSubmit={handleSubmit}
                className='d-flex flex-column align-items-center'
            >
                <div className='w-75 form-group'>
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
                        // remove comment below when live
                        // type='password'
                        placeholder='password'
                        className='form-control my-1'
                        value={formValues.password}
                        onChange={handleChange}
                    ></input>
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
                </div>
            </form>
        </Container>
    );
}

export default Login;