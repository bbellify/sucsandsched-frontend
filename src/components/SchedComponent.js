import React, { useState } from 'react'

import ComingSoon from './modals/ComingSoon'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import sched from '../assets/sched.JPEG'

// can refactor into class component if need be I think
function SchedPub(props) {

    const [modalShow, setModalShow] = useState(false)
   
    const handleButton = () => {
        // this is a tricky one.. probably sends to new page with massive form. this is stretch. 
        // for now just triggers modal
        setModalShow(true)
    }

        return (
            <Container className='text-center'>

                {modalShow && <ComingSoon show={modalShow} setShow={setModalShow} />}

                <div className='d-flex flex-row justify-content-between mt-2'>
                    <h4 className='mt-3'>sched</h4>

                    {localStorage.getItem('token') &&
                    <Button onClick={()=>handleButton()}variant='light' className='border-dark py-1 btn-sm'>track your sched</Button>}

                </div>
                <img src={sched} alt='sched' className='w-100 mt-3'/>
            </Container>
        )
}

export default SchedPub