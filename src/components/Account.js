import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/userActions'

import Container from 'react-bootstrap/Container'


//axiosWithAuth will go here to populate this component

class Account extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    // do I need local state?


    componentDidMount() {
        this.props.getUser(this.props.username)
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
            <Container>
                <h2>welcome back {this.props.first_name}</h2>
                <div>
                    <h3>tracking sucs: false</h3>
                    <h3>upcoming races:</h3>
                    <h4>all above in conditional div on whether user has been got</h4>
                </div>
            </Container>
        );
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