import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';

import { getSucs } from '../../actions/sucsActions'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function SucsPub(props) {

    const { sucs } = props
    const navigate = useNavigate()
    
    const toLogin = () => {
        // open login modal that will redirect to sucs
        navigate('/login')
    }

    useEffect(() => {
        props.getSucs()
        console.log(sucs)
    }, [])

    return (
        <Container className='text-center'>
            <div className='d-flex flex-row justify-content-between mt-2'>
                <h4 className='mt-3'>sucs</h4>
                {!(localStorage.getItem('token')) &&
                    <Button onClick={()=>toLogin()}variant='light' className='border-dark py-1 btn-sm'>log in to track sucs</Button>}
            </div>

            {(props.sucs.length === 0) && <h2 className='mt-2'>incoming...</h2>}

            {(sucs && 
                <Table className='my-3 text-center' striped bordered>
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
                        {sucs.map(day => {
                            return (
                                <tr>
                                    <td className='fw-bold'>{day['sucs_id']}</td>
                                    <td>{day['situps'] ? day['situps'] : 'Rest'}</td>
                                    <td>{day['crunches'] ? day['crunches'] : 'Day'}</td>
                                    <td>{day['squats'] ? day['crunches'] : ''}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )}
        </Container>

)}

const mapStateToProps = state => {
    return {
        sucs: state.sucs.sucs
    }
}

export default connect(mapStateToProps, { getSucs })(SucsPub)