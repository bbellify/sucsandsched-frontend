import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Registered(props) {

    const { first_name, username } = props.user

    return (
        
        <Modal className='my-4 text-center' show='true'> 
            <Modal.Body className='my-3'>
                <h4>welcome, {first_name}</h4>
                <h5>username: {username}</h5>
            </Modal.Body>
                <LinkContainer className='w-75 align-self-center mb-3' to='/login'>
                    <Button variant='light'>get started</Button>
                </LinkContainer>
        </Modal>
    );
}

export default Registered;