import React from 'react'
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import { getSucs } from '../actions/sucsActions'

import sucsImg from '../assets/sucs.jpg'


class SucsComponent extends React.Component {

    handleChanges = e => {
        console.log(e.target.value)
    }

    handleCLick = () => {
        console.log('click')
    }

    componentDidMount() {
        this.props.getSucs()
        console.log(this.props.sucs)
    }

    render() {

        return (
            <Container>

            {(this.props.isFetching || this.props.sucs.length === 0) && <h2 className='mt-2'>incoming...</h2>}
            {(this.props.sucs && <Table >
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
                    {this.props.sucs.map(day => {
                        return (
                            <tr>
                                <td>{day['sucs_id']}</td>
                                <td>{day['situps']}</td>
                                <td>{day['crunches']}</td>
                                <td>{day['squats']}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>)}

            <img src={sucsImg} alt='sucs'/>
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