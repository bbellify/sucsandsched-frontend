import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <Container>
            <h2>SUCS</h2>
        </Container>
    )
}

export default Sucs