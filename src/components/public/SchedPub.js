import React from 'react'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import sched from '../../assets/sched.JPEG'

function SchedPub(props) {

    const navigate = useNavigate()

    const toLogin = () => {
        // open login modal that will redirect to sucs
        navigate('/login')
    }

        return (
            <Container className='text-center'>
                <div className='d-flex flex-row justify-content-between mt-2'>
                    <h4 className='mt-3'>sched</h4>
                    {!(localStorage.getItem('token')) &&
                        <Button onClick={()=>toLogin()}variant='light' className='border-dark py-1 btn-sm'>log in to track sched</Button>}
                </div>
                <img src={sched} alt='sched' className='w-100 mt-3'/>
            </Container>
        )
}

export default SchedPub