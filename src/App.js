import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkContainer } from 'react-router-bootstrap/';

import logo from './logo.ico'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sucs from './components/Sucs';

import requireAuth from './utils/requireAuth'


function App() {
  return (
    <div className="App">
      <nav className="App-header">
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
      </nav>
        
      <img className='App-logo' src={logo} alt='logo'/>
      <p>SUCS and Sched</p>
      <Sucs />

    </div>
  );
}

export default App;
