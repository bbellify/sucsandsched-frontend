import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import CloseButton from 'react-bootstrap/CloseButton';

function LoginModal(props) {

    const { show, setShow } = props

    const location = useLocation()
    const navigate = useNavigate()
    
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
                navigate(`/my-account${location.pathname}`)
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    invCred: err.response.data.message
                })
            })
    }

    return (
        
        <Modal className='my-4 text-center' onHide={setShow} show={show}> 
            <Modal.Header className='m-0'>
                <CloseButton onClick={()=>setShow()} />
            </Modal.Header>
            
            <Modal.Body>
            
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
            </form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;