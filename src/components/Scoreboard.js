import React from 'react'

import ComingSoon from './modals/ComingSoon'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import timer from '../assets/timer.png'

// can refactor into class component if need be I think
function SchedPub(props) {

    

        return (
            <Container className=''>

                

                <div className='d-flex flex-row justify-content-between mt-2'>
                    <h3 className='mt-3'>scoreboard</h3>

                    

                </div>
                
                <div className='border-bottom-0 border-top vh-100 shadow-lg  px-4 px-sm-5 mt-2  pt-1 pt-sm-4' style={{ borderRadius: '40px' }} >
                
                    <h3 className='my-4'>coming soon...</h3>
                    
                
                
                </div>

            </Container>
        )
}

export default SchedPub