import React from 'react';
import { useNavigate } from "react-router";


function Registered(props) {

    const { first_name, username } = props.user

    const navigate = useNavigate()

    return (
        <div>
            <h3>Registered</h3>
            <h4>{first_name}</h4>
            <h4>{username}</h4>
        </div>
    );
}

export default Registered;