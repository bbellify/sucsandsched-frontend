import React from 'react'

import Container from 'react-bootstrap/Container'

import sched from '../../assets/sched.JPEG'

class SchedPub extends React.Component {

    render() {

        return (
            <Container >
                <img src={sched} alt='sched' width='100%'/>
                <h4>public view</h4>
           </Container>
        )
    }
}

export default SchedPub