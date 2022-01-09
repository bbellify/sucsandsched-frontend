import React, { useState} from 'react';
import { useNavigate } from "react-router";

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { LinkContainer } from 'react-router-bootstrap'



function Registered(props) {

    const { first_name, username } = props.user

    const navigate = useNavigate()

    return (
        <Modal show='true'> 
            <h3>success <span>😤</span></h3>
            <h4>welcome, {first_name}</h4>
            <LinkContainer to='/login'>
                <Button>get started</Button>
            </LinkContainer>
        </Modal>
    );
}

export default Registered;