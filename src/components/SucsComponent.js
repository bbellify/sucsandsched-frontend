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
    }

    render() {

        return (
            <Container>

            {(this.props.isFetching || this.props.sucs.length === 0) && <h2 className='mt-2'>incoming...</h2>}
            
            {/* {this.props.sucs.map(day => {
                return <p>test</p>
            })} */}
            

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

                </tbody>
            </Table>

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

// const mapDispatchToProps = dispatch => {
//     return {
//         getSucs
//     }
// }

export default connect(mapStateToProps, { getSucs })(SucsComponent)