import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Navigate } from 'react-router-dom'

import NavComponent from './components/NavComponent'
import SucsPub from './components/public/SucsPub'
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

        {/* left these for reference, but I think I can move them to Account
        
        <Route path={'/sucs'} element={<SucsComponent/>}/>
        <Route path={'/sched'} element={<SchedComponent/>}/>
        
        
        
        */}
        <Route exact path={'/sucs'} element={<SucsPub />}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/logout'} element={<Logout />}/>
        <Route path={'/register'} element={<Register />}/>
        <Route path={'/'} element={<Home />}/>


        <Route exact path={'/my-account/sucs'} 
          element={
            <RequireAuth redirectTo='/sucs'>
              <SucsComponent />
            </RequireAuth>
          }
        />


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
