import React from 'react';
import { connect } from 'react-redux';

// import SucsComponent from './SucsComponent';
// import Home from './Home'

import { getUser } from '../actions/userActions'

import Container from 'react-bootstrap/Container'

class Account extends React.Component {

    componentDidMount() {
        this.props.getUser()
    }

    componentDidUpdate(prevProps) {
        
    }

    render() {
        return (
            <Container className='mt-3'>

                <h2>welcome back {this.props.user.first_name}</h2>

                

                {this.props.user &&
                    <div>
                        <h3>tracking sucs: {this.props.user.does_sucs ? 'you bet' : 'not yet'}</h3>
                        <h3>upcoming races:</h3>
                    </div>
                }



                {/* components can go here.. leaderboard, etc */}
                {/* <Home /> */}
                {/* <SucsComponent /> */}
            </Container>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        username: state.user.username,
        first_name: state.user.first_name
    }
}

export default connect(mapStateToProps, { getUser })(Account);

