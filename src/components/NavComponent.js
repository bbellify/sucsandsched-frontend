import React, { useEffect, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { LinkContainer } from 'react-router-bootstrap/';

import logo from '../assets/logo.ico'

function NavComponent(props) {

    return (

<Navbar bg="success" expand="false" className='py-0 my-0 sticky-top'>
  <Container className='d-flex px-lg-0' >
    <Navbar.Brand className='p-0 mb-1'><img src={logo} alt='logo'/></Navbar.Brand>
    
    {/* figure out how to make sucs and sched links */}
    <h2 className='p-0 pt-1'>sucs and sched</h2>
    
    <Navbar.Toggle className='ms-auto p-0'/>

    {/* figure out how to close offcanvas onclick */}
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className='w-auto p-1 d-flex'
        > 
            <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/account'>
                <Nav.Link>Account</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/sucs'>
                <Nav.Link>SUCS</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/sched'>
                <Nav.Link>Sched</Nav.Link>
            </LinkContainer>

            <NavDropdown.Divider />
            <LinkContainer to='/logout'>
                <Nav.Link>Logout</Nav.Link>
            </LinkContainer>

        </Navbar.Offcanvas>
  </Container>
</Navbar>
       
    )
}

export default NavComponent