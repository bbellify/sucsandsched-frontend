import React from 'react';

import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton';

import timer from '../../assets/timer.png'

function ComingSoon(props) {

    const { show, setShow } = props

    return (
        
        <Modal className='my-4 text-center' onHide={setShow} show={show}> 
            <Modal.Header className='m-0'>
                <CloseButton onClick={()=>setShow()} />
            </Modal.Header>
            
            <Modal.Body>

                <img src={timer} className='w-25 mb-3' alt='coming soon'/>
                <h3>coming soon...</h3>
                    
            </Modal.Body>
        </Modal>
    );
}

export default ComingSoon;