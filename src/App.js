import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom'

import NavComponent from './components/NavComponent'
import Sucs from './components/Sucs';
import Home from './components/Home'
import Logout from './components/Logout'

import requireAuth from './utils/requireAuth'


function App() {
  return (
    <React.Fragment>
      <NavComponent />
  
      <Routes>
        <Route path={'/sucs'} element={<Sucs />}/>
        <Route path={'/logout'} element={<Logout />}/>
        <Route path={'/'} element={<Home />}/>
      </Routes>

    </React.Fragment>
  );
}

export default App;
