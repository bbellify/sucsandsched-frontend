import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Navigate } from 'react-router-dom'

import NavComponent from './components/NavComponent'
import SucsComponent from './components/SucsComponent';
import SchedComponent from './components/SchedComponent'
import Home from './components/Home'
import Account from './components/Account'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register';

function App() {
  return (
    <React.Fragment>
      <NavComponent />
  
      <Routes>
        <Route path={'/sucs'} element={<SucsComponent/>}/>
        <Route path={'/sched'} element={<SchedComponent/>}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/logout'} element={<Logout />}/>
        <Route path={'/register'} element={<Register />}/>
        <Route path={'/'} element={<Home />}/>


        <Route path={'/my-account'} 
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

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default App;
