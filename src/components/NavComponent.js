import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { LinkContainer } from 'react-router-bootstrap/';

import logo from '../assets/logo.ico'

function NavComponent(props) {

    return (

<Navbar bg="success" expand="lg">
  <Container className='d-flex'>
    <Navbar.Brand className='p-2'><img src={logo} alt='logo'/></Navbar.Brand>
    <h2 className='p-2'>sucs and sched</h2>
    <Navbar.Toggle className='ms-auto p-2'/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='ms-auto p-2'> 
         <LinkContainer to='/account'>
            <Nav.Link>Account</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/sucs'>
            <Nav.Link>SUCS</Nav.Link>
        </LinkContainer>
        <NavDropdown.Divider />
        <LinkContainer to='/logout'>
            <Nav.Link>Logout</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    )
}

export default NavComponent


{/* <Container>
<Navbar bg='dark' expand='lg'>
    <Navbar.Brand>
        <img
        className='App-logo' 
        src={logo} alt='logo'
        />
    </Navbar.Brand>
    <Navbar.Toggle>
    
        

        
    
    </Navbar.Toggle>
</Navbar>
</Container> */}