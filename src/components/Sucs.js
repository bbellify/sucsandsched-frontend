import React, { useEffect, useState } from 'react'
import axios from 'axios'

import sucsImg from '../assets/sucs.jpg'

import Container from 'react-bootstrap/Container'

function Sucs(props) {

    const [sucs, setSucs] = useState([])

    useEffect(()=> {
        axios.get('https://sucsandsched.herokuapp.com/api/sucs')
            .then(res => {
                setSucs(res.data)
                console.log(sucs)
            })
            .catch()
    }, [])

    return (
        <Container className='text-center'>
            <h2>SUCS</h2>
            <img src={sucsImg} alt='sucs'/>
        </Container>
    )
}

export default Sucs