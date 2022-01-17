import React from 'react';
import { connect } from 'react-redux'

import { toggleSucs } from '../../actions/sucsActions'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import CloseButton from 'react-bootstrap/CloseButton';

function SucsModal(props) {

    const { show, setShow } = props

    const handleSubmit = e => {
        e.preventDefault()
        props.toggleSucs()
        setShow()
    }

    return (
        
        <Modal className='my-4 text-center' onHide={setShow} show={show}> 
            <Modal.Header className='m-0'>
                <CloseButton onClick={()=>setShow()} />
            </Modal.Header>
            
            <Modal.Body>
            
        
                <h3>toggle sucs</h3>
                
                <Alert className='py-2 mb-1' variant='danger'>
                    Turning off sucs tracking will end your current streak!
                </Alert>

                <Button 
                    className='w-100 my-1 border border-dark'
                    variant='light'
                    onClick={handleSubmit}
                >
                    stop tracking sucs
                </Button>
        
            </Modal.Body>
        </Modal>
    );
}

export default connect(null, { toggleSucs })(SucsModal);