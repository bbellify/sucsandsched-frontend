import React, { useState } from 'react';

import { LinkContainer } from 'react-router-bootstrap'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function LoginModal(props) {

    const { show, setShow } = props
    console.log(show)
    console.log(props)

    return (
        
        <Modal className='my-4 text-center' onHide={setShow} show={show}> 
            <Modal.Body className='my-3'>
                <h4>login </h4>
                <h5> form </h5>
            </Modal.Body>

            {/* need an on submit here */}
            <Button variant='light w-75 align-self-center'>Login</Button>

            {/* moved above login button out of below container.. not sure I'll need that once modal is fully wired */}
            {/* <LinkContainer className='w-75 align-self-center mb-3' to='/login'>    
            </LinkContainer> */}

            <Button onClick={()=>setShow()} variant='light w-75 align-self-center my-3' >cancel</Button>    
    
        </Modal>
    );
}

export default LoginModal;