import React from 'react'
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import { getSucs } from '../actions/sucsActions'

import { useEffect } from 'react'

function SucsComponent(props) {

    const { sucs } = props

    useEffect(() => {
        props.getSucs()
    }, [])

    return (
        <Container>
            <h4 className='mt-3'>sucs</h4>
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

export default connect(mapStateToProps, { getSucs })(SucsComponent)