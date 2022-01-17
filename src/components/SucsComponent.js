import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { getSucs, getSucsRes, logSucs, toggleSucs } from '../actions/sucsActions'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


function SucsComponent(props) {

    const { sucs, username } = props
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            props.getSucs()
        } else {
            props.getSucsRes()
        }
    }, [sucs])

    const logToday = () => {
        const today = new Date()
        props.logSucs(today.getDate())
    }

    const handleToggleSucs = () => {
       props.toggleSucs()
    }

    // I think below will be for the get everyone's sucs button. import getSucsAll above, pass to props below
    // useEffect(() => {
    //     getSucsAll
    // })

    return (
        <Container>

            <div className='d-flex flex-row justify-content-between mt-2'>
                <h4 className='mt-3 me-auto'>sucs</h4>
                {((localStorage.getItem('token')) && !username) &&
                    <Button onClick={()=>handleToggleSucs()}variant='light' className='border-dark py-1 btn-sm'>track your sucs</Button>}
                
                {username && 
                    <Button onClick={()=>navigate('/my-account')} variant='light' className='border-dark py-1 btn-sm'>go to account settings to turn off tracking sucs</Button>}
                {username && 
                    <Button onClick={()=>logToday()}variant='light' className='border-dark py-1 btn-sm ms-1'>Log today</Button>}
            </div>
            
            {(props.isFetching || props.sucs.length === 0) && <h2 className='mt-2'>incoming...</h2>}

            {(sucs && 
                <Table className='my-3 text-center' striped bordered>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Situps</th>
                            <th>Crunches</th>
                            <th>Squats</th>
                            {username ? <th>mine</th> : null}
                            {/* when rendering everyone elses, do conditional to correct for refresh bug if you refresh on this page and lose state.. maybe that won't be an issue? probably need to do same for below also */}
                            {/* 
                            {other usernames here, toggle on show all?}
                            */}
                        </tr>
                    </thead>
                    <tbody>
                        {sucs.map((day, index) => {
                            return (
                                <tr key={index}>
                                    <td className='fw-bold'>{day['sucs_id']}</td>
                                    <td>{day['situps'] ? day['situps'] : 'Rest'}</td>
                                    <td>{day['crunches'] ? day['crunches'] : 'Day'}</td>
                                    <td>{day['squats'] ? day['crunches'] : ''}</td>
                                    {/* replace the checkmark below, this one is kinda bad */}
                                    {username ? <td>{day[`${username}`] ? '☑️' : ''}</td> : null}
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
        sucs: state.sucs.sucs,
        error: state.sucs.error,
        username: state.user.username
    }
}

export default connect(mapStateToProps, { getSucs, getSucsRes, logSucs, toggleSucs })(SucsComponent)