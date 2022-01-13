import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { getSucs } from '../../actions/sucsActions'

import LoginModal from '../modals/LoginModal'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function SucsPub(props) {

    const { sucs } = props

    const [modalShow, setModalShow] = useState(false)
    
    const showModal = () => {
        setModalShow(!modalShow)
    }

    useEffect(() => {
        props.getSucs()
    }, [])

    return (
        <Container className='text-center'>

            {modalShow && <LoginModal show={modalShow} setShow={setModalShow} />}

            <div className='d-flex flex-row justify-content-between mt-2'>
                <h4 className='mt-3'>sucs</h4>
                {!(localStorage.getItem('token')) &&
                    <Button onClick={()=>showModal()}variant='light' className='border-dark py-1 btn-sm'>log in to track sucs</Button>}
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
                        {sucs.map((day, index) => {
                            return (
                                <tr key={index}>
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