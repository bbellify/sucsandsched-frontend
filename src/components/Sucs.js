import React, { useEffect, useState } from 'react'
import axios from 'axios'

import sucsImg from '../assets/sucs.jpg'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'


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

            <h2 className='mt-2'>SUCS</h2>
            

            <Table >
                <thead>
                    <tr>
                        <th>
                            Day
                        </th>
                        <th>
                            Situps
                        </th>
                        <th>
                            Crunches
                        </th>
                        <th>
                            Squats
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sucs.forEach(day => {
                        return (
                        <td>
                            {day.sucs_day}
                        </td>
                        )
                    })}
                </tbody>
            </Table>

            <img src={sucsImg} alt='sucs'/>
        </Container>
    )
}

export default Sucs