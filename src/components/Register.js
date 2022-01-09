import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup'
import schema from '../utils/registerSchema'

import { connect } from 'react-redux'
import { setUsername } from '../actions/userActions'

import RegisteredModal from './RegisteredModal'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Register(props) {

    const [registered, setRegistered] = useState({ registered: false, error: '' })
    const [isDisabled, setIsDisabled] = useState(true)

    const initialValues = {
        username: '',
        first_name: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialValues)

    const [formErrors, setFormErrors] = useState({
        username: '',
        first_name: '',
        password: ''
    })

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => 
                setFormErrors({...formErrors, [name]: ''}))
            .catch((err) => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const handleChange = e => {
        validate(e.target.name, e.target.value)
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(formValues.username.length > 0 && formValues.first_name.length > 0 && formValues.password.length > 0 ) {
            setIsDisabled(false)
        } else if (formValues.username.length === 0 || formValues.first_name.length === 0 || formValues.password.length === 0 )
            setIsDisabled(true)
    }, [formValues]) //eslint-disable-line
    
    const handleSubmit = e => {
        e.preventDefault()

        const newUser = {
            username: formValues.username.trim(),
            first_name: formValues.username.trim(),
            password: formValues.password.trim()
        }

        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, newUser)
            .then(res => {
                props.setUsername(res.data.username)
                setRegistered({ registered: true, error: '' })
            })
            .catch(err => {
                setRegistered({ registered: false, error: err.response.data.message})
            })
    }

    return (
            <Container className='mt-4 col-10 col-md-5 col-lg-4 text-center'>
                
                {registered.registered && <RegisteredModal user={{ username: formValues.username, first_name: formValues.first_name}}/>}
                
                <form onSubmit={handleSubmit}>
                    <h3>get registered:</h3>
                    <input 
                        name='username'
                        type='text'
                        placeholder='username'
                        className='form-control my-1'
                        value={formValues.username}
                        onChange={handleChange}
                    ></input>
                    <input 
                        name='first_name'
                        type='text'
                        placeholder='first name'
                        className='form-control my-1'
                        value={formValues.first_name}
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
                    <Button 
                        disabled={isDisabled}
                        className='w-100 my-1'
                        variant='light'
                        type='submit'
                    >
                        create account
                    </Button>
                    {registered.error && <h3>{registered.error}</h3>}

                    {formErrors.username && 
                        <Alert className='py-2 mb-1' variant='danger'>
                            {formErrors.username}
                        </Alert>
                    }
                    
                    {formErrors.first_name && 
                        <Alert className='py-2 mb-1' variant='danger'>
                            {formErrors.first_name}
                        </Alert>
                    }

                    {formErrors.password && 
                        <Alert className='py-2 mb-1' variant='danger'>
                            {formErrors.password}
                        </Alert>
                    }
                    
                </form>

            </Container>
    );
}

export default connect(null, { setUsername })(Register);