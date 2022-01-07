import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom'

import NavComponent from './components/NavComponent'
import SucsComponent from './components/SucsComponent';
import SchedComponent from './components/SchedComponent'
import Home from './components/Home'
import Account from './components/Account'
import Login from './components/Login'
import Logout from './components/Logout'

import RequireAuth from './utils/RequireAuth'


function App() {
  return (
    <React.Fragment>
      <NavComponent />
  
      <Routes>
        <Route path={'/sucs'} element={<SucsComponent/>}/>
        <Route path={'/sched'} element={<SchedComponent/>}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/logout'} element={<Logout />}/>
        <Route path={'/'} element={<Home />}/>

        <Route path={'/account'} 
          element={
            <RequireAuth redirectTo='/login'>
              <Account />
            </RequireAuth>
          }
        />
      </Routes>

    </React.Fragment>
  );
}

export default App;
