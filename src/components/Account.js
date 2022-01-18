import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// import SucsComponent from './SucsComponent';
// import Home from './Home'

import { getUser } from '../actions/userActions'
import { toggleSucs } from '../actions/sucsActions'

import SettingsModal from './modals/SettingsModal'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


function Account(props) {

    const [settingsShow, setSettingsShow] = useState(false)
    
    const showSettings = () => {
        setSettingsShow(!settingsShow)
    }

    useEffect(() => {
        props.getUser()
    }, [props.user])
    
    return (
        <Container className='mt-3'>

            {settingsShow && <SettingsModal show={settingsShow} setShow={setSettingsShow} doesSucs={props.user.does_sucs}/>}

            <div className='d-flex align-items-center'>
                <h2 className='me-auto sm-display-4'>welcome back {props.user.first_name}</h2>

                <Button variant='light' className='border border-dark d-flex align-items-center px-4' onClick={showSettings}> 
                    Settings
                    <i className='ms-2 bi bi-gear-wide-connected'></i>
                </Button>

            </div>

            <div className='border-bottom-0 border-top vh-100 shadow-lg  px-4 px-sm-5 mt-2  pt-1 pt-sm-4' style={{ borderRadius: '40px' }} >
                <h3 className='mt-5'>tracking sucs: {props.user.does_sucs ? 'affirmative' : 'not yet'}</h3>
                
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