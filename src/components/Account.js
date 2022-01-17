import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// import SucsComponent from './SucsComponent';
// import Home from './Home'

import { getUser } from '../actions/userActions'
import { toggleSucs } from '../actions/sucsActions'

import SucsModal from './modals/SucsModal'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


function Account(props) {

    const [modalShow, setModalShow] = useState(false)
    
    const showModal = () => {
        setModalShow(!modalShow)
    }

    useEffect(() => {
        props.getUser()
    }, [props.user])

    const handleTrackSucs = () => {
        props.toggleSucs()
    }
    
    return (
        <Container className='mt-3'>

            {modalShow && <SucsModal show={modalShow} setShow={setModalShow} />}

            <h2>welcome back {props.user.first_name}</h2>

            <div>
                <h3>tracking sucs: {props.user.does_sucs ? 'you bet' : 'not yet'}</h3>
                
                {!props.user.does_sucs && 
                <Button variant='light' className='border border-dark' onClick={handleTrackSucs}> track your sucs </Button>
                }   

                {props.user.does_sucs && 
                <Button variant='light' className='border border-dark' onClick={showModal}> stop tracking sucs </Button>
                }
                
                <h3>upcoming races:</h3>
                
            </div>


            {/* components can go here.. leaderboard, etc */}
            {/* <Home /> */}
            {/* <SucsComponent /> */}
        </Container>
        
)}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        username: state.user.username,
        first_name: state.user.first_name
    }
}

export default connect(mapStateToProps, { getUser, toggleSucs })(Account);

