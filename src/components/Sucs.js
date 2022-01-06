import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <div>
            <h2>SUCS</h2>
        </div>
    )
}

export default Sucs