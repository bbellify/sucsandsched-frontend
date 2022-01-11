import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function TrackSucsModal(props) {

    return (
        
        <Modal className='my-4 text-center' show='true'> 
            <Modal.Body className='my-3'>
                <h4>turn on track sucs </h4>
            </Modal.Body>
                <LinkContainer className='w-75 align-self-center mb-3' to='/login'>
                    <Button variant='light'>Login</Button>
                    
                </LinkContainer>

                <Button variant='light'>cancel</Button>    
    
        </Modal>
    );
}

export default TrackSucsModal;