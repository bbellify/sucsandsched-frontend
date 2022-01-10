import React from 'react'
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { getSucs, getSucsAll, logSucs } from '../actions/sucsActions'

import { useEffect } from 'react'

function SucsComponent(props) {

    const { sucs } = props

    // need to refactor here - want to maybe go down to one endpoint, BUT without username in localstorage I'm not sending username to the backend to get the restricted getSucs. The username is in the decodedJwt, BUT the decodedJwt appears AFTER restricted middleware. if I put that middleware on the endpoint, instead of failing and just delivering no restriction getSucs, it nexts to error. hmmm
    const username = localStorage.getItem('username')

    useEffect(() => {

        //stupid hacky bugged version for now:
        props.getSucsAll()
        console.log(props.error)
        
        if(props.error.length > 0) {
            props.getSucs()
        }
    }, [])

    const logToday = () => {
        const today = new Date()
        props.logSucs(today.getDate())
    }

    return (
        <Container>
            <div className='d-flex flex-row justify-content-between mt-2'>
                <h4 className='mt-3'>sucs</h4>
                {username && 
                <Button onClick={()=>logToday()}variant='light' className='border-dark py-1 btn-sm'>Log today</Button>}
            </div>
            
            {(props.isFetching || props.sucs.length === 0) && <h2 className='mt-2'>incoming...</h2>}

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
                            {username && <th>mine</th>}

                            {/* when rendering everyone elses, do conditional to correct for refresh bug if you refresh on this page and lose state.. maybe that won't be an issue? probably need to do same for below also */}

                            {/* 
                            {other usernames here, toggle on show all?}
                            */}
                            
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
                                    {/* replace the checkmark below, this one is kinda bad */}
                                    {username && <td>{day[`${username}`] ? '☑️' : ''}</td>}
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
        error: state.sucs.error
    }
}

export default connect(mapStateToProps, { getSucs, getSucsAll, logSucs })(SucsComponent)