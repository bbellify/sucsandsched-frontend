import React from 'react';

import lasers from '../assets/lasers.jpeg'

function Logout(props) {
    return (
        <div className='text-center'>
            <h3>no days off</h3>
            <img src={lasers} alt='no days off' width='70%'/>
        </div>
    );
}

export default Logout;