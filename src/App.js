import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap/';

import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar'

import NavComponent from './components/NavComponent'
import Sucs from './components/Sucs';

import requireAuth from './utils/requireAuth'


function App() {
  return (
    <React.Fragment>
      <NavComponent />
      <Container>
        <p>SUCS and Sched</p>
      </Container>

      <Routes>
        <Route path={'/sucs'} element={<Sucs />}/>
      </Routes>

    </React.Fragment>
  );
}

export default App;
