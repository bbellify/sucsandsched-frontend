import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Login(props) {

    const [errors, setErrors] = useState({
        invCred: '',
        disabled: true
    })

    const [formValues, setFormValues] = useState({ 
        username: props.username ? props.username : '', 
        password: '' 
    })


    useEffect(() => {
        if(formValues.username.length > 0 && formValues.password.length > 0) {
            setErrors({
                ...errors,
                disabled: false
            })
        } else if (formValues.username.length === 0 || formValues.password.length === 0 )
            setErrors({
                ...errors,
                disabled: true
            })
    }, [formValues]) //eslint-disable-line

    const navigate = useNavigate()

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const creds = {
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }

        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, creds)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                navigate('/my-account')
                // for future reference - navigate() appears to have a problem with template literals, better to just do string concatenation 
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    invCred: err.response.data.message
                })
            })
    }

    return (
        <Container className='mt-4 col-10 col-md-5 col-lg-4 text-center'>
            <form onSubmit={handleSubmit}>
                    <h3>welcome back</h3>
                    <input
                        name='username'
                        type='text'
                        placeholder='username'
                        className='form-control my-1 fw-bold'
                        value={formValues.username}
                        onChange={handleChange}
                    ></input>
                    <input 
                        name='password'
                        type='password'
                        placeholder='password'
                        className='form-control my-1 fw-bold'
                        value={formValues.password}
                        onChange={handleChange}
                    ></input>
                    
                    {errors.invCred &&
                    <Alert className='py-2 mb-1' variant='danger'>
                        {errors.invCred}
                    </Alert>
                    }

                    <Button 
                        className='w-100 my-1 border border-dark'
                        variant='light'
                        type='submit'
                        disabled={errors.disabled}
                    >
                        login
                    </Button>
                    <LinkContainer className='w-100' to='/register'>
                        <Button variant='border border-dark light'>
                            need an account?
                        </Button>
                    </LinkContainer>
            </form>
        </Container>
    );
}

const mapStateToProps = state => {
    return ({
        username: state.user.username
    })
}

export default connect(mapStateToProps)(Login);