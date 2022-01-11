import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginModal from '../modals/LoginModal'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import sched from '../../assets/sched.JPEG'

function SchedPub(props) {

    const navigate = useNavigate()

    const [modalShow, setModalShow] = useState(false)

    // finish wiring this function to open modal
    const showModal = () => {
        setModalShow(!modalShow)
        // show login modal that will redirect to sucs, should be able to remove navigate once modal works
        // navigate('/login')
    }

        return (
            <Container className='text-center'>

                {modalShow && <LoginModal show={modalShow} setShow={setModalShow} />}

                <div className='d-flex flex-row justify-content-between mt-2'>
                    <h4 className='mt-3'>sched</h4>
                    {!(localStorage.getItem('token')) &&
                        <Button onClick={()=>showModal()}variant='light' className='border-dark py-1 btn-sm'>log in to track sched</Button>}
                </div>
                <img src={sched} alt='sched' className='w-100 mt-3'/>
            </Container>
        )
}

export default SchedPub