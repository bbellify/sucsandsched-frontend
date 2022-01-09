import axios from 'axios';
import React, { useState } from 'react';

import { connect } from 'react-redux'
import { setUsername } from '../actions/userActions'

import RegisteredModal from './RegisteredModal'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Register(props) {

    const [registered, setRegistered] = useState({ registered: false, error: '' })

    const initialValues = {
        username: '',
        first_name: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, formValues)
            .then(res => {
                props.setUsername(res.data.username)
                setRegistered({ registered: true, error: '' })
                
            })
            .catch(err => {
                setRegistered({ registered: false, error: err.response.data.message})
            })
    }

    return (

        <div>
            {registered.registered && <RegisteredModal user={{ username: formValues.username, first_name: formValues.first_name}}/>}
        
            <Container className='text-center mt-4'>
                <form 
                    className='d-flex flex-column align-items-center'
                    onSubmit={handleSubmit}
                >
                    <div className='form-group w-75'>
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
                            className='w-100 my-1'
                            variant='light'
                            type='submit'
                        >
                            create account
                        </Button>
                        {registered.error && <h3>{registered.error}</h3>}
                    </div>
                </form>

            </Container>
        </div>
    );
}

export default connect(null, { setUsername })(Register);