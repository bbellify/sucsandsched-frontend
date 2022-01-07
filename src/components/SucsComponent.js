import React from 'react'
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import { getSucs } from '../actions/sucsActions'

class SucsComponent extends React.Component {

    handleChanges = e => {
        console.log(e.target.value)
    }

    handleCLick = () => {
        console.log('click')
    }

    componentDidMount() {
        this.props.getSucs()
    }

    render() {

        return (
            <Container>

            {(this.props.isFetching || this.props.sucs.length === 0) && <h2 className='mt-2'>incoming...</h2>}
            {(this.props.sucs && 
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
                        {this.props.sucs.map((day, index) => {
                            return (
                                <tr key={day[index]}>
                                    <td className='fw-bold'>{day['sucs_id']}</td>
                                    <td>{day['situps'] ? day['situps'] : 'Rest'}</td>
                                    <td>{day['crunches'] ? day['crunches'] : 'Day'}</td>
                                    <td>{day['squats'] ? day['crunches'] : ''}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>)}
        </Container>
        )
    }

}

const mapStateToProps = state => {
    return {
        sucs: state.sucs.sucs,
        isFetching: state.sucs.isFetching,
        error: state.sucs.error
    }
}

export default connect(mapStateToProps, { getSucs })(SucsComponent)