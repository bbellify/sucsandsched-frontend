import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import sched from '../assets/sched.JPEG'

// can refactor into class component if need be I think
function SchedPub(props) {

    // for now this should just pop up modal that says feature not yet available
    const handleButton = () => {
        // this is a tricky one.. probably sends to new page with massive form. this is stretch. 
        console.log('track your sched')
    }

        return (
            <Container className='text-center'>
                <div className='d-flex flex-row justify-content-between mt-2'>
                    <h4 className='mt-3'>sucs</h4>

                    {localStorage.getItem('token') &&
                    <Button onClick={()=>handleButton()}variant='light' className='border-dark py-1 btn-sm'>track your sched</Button>}

                </div>
                <img src={sched} alt='sched' className='w-100 mt-3'/>
            </Container>
        )
}

export default SchedPub