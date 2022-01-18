import React from 'react';
import { connect } from 'react-redux'

import { toggleSucs } from '../../actions/sucsActions'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import CloseButton from 'react-bootstrap/CloseButton';

function SettingsModal(props) {

    const { show, setShow, doesSucs } = props

    const handleSubmit = e => {
        e.preventDefault()
        props.toggleSucs()
    }

    return (
        
        <Modal className='my-4' onHide={setShow} show={show}> 
            <Modal.Header className='m-0'>
                <h3 className='me-auto m-0'>Account Settings</h3>
                <CloseButton onClick={()=>setShow()} />
            </Modal.Header>
            
            <Modal.Body>
                <h3>Sucs tracking</h3>
                
                <div className='mb-4'>
                    {doesSucs && 
                        <div>
                            <Alert className='py-2 mb-1' variant='danger'>
                                Turning off sucs tracking will end your current streak!
                            </Alert>

                            <Button 
                                className='w-100 my-1 border border-dark'
                                variant='light'
                                onClick={handleSubmit} >
                                stop tracking sucs
                            </Button>
                        </div>}

                    {!doesSucs && 
                        <div>
                            <Button 
                                    className='w-100 my-1 border border-dark'
                                    variant='light'
                                    onClick={handleSubmit} >
                                    track sucs
                            </Button>
                        </div>}
                </div>

                <h3>Sched settings</h3>
                <p>coming soon</p>

                <h3>Log settings</h3>
                <p>coming soon</p>
        
            </Modal.Body>
        </Modal>
    );
}

export default connect(null, { toggleSucs })(SettingsModal);