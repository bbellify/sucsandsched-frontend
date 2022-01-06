import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap/';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar'

import logo from './logo.ico'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sucs from './components/Sucs';

import requireAuth from './utils/requireAuth'


function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <Navbar>
          <Navbar.Brand>
            <img
              className='App-logo' 
              src={logo} alt='logo'
            />
          </Navbar.Brand>
          <Breadcrumb>
            <LinkContainer to='/'>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>

            <LinkContainer to='/sucs'>
              <Breadcrumb.Item>
                SUCS
              </Breadcrumb.Item>
            </LinkContainer>

          </Breadcrumb>
        </Navbar>
        
      </nav>
        
  
      <p>SUCS and Sched</p>

      <Routes>
        <Route path={'/sucs'} element={<Sucs />}/>
      </Routes>

    </div>
  );
}

export default App;
