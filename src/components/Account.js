import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/userActions'

import Container from 'react-bootstrap/Container'

// call getUser on mount, getting username from localStorage as backup

class Account extends React.Component {

    componentDidMount() {
        const uname = localStorage.getItem('username')
        console.log(uname)
        this.props.getUser(this.props.username ? this.props.username : uname)
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps)
        // console.log(prevProps.first_name)
        // console.log(this.props.first_name)
        // if (prevProps.first_name !== this.props.first_name) {
        //     this.props.getUser(prevProps.username)
        // }
    }

    render() {
        console.log(this.props.user)
        return (
            
            <Container>
                <h2>welcome back {this.props.user.first_name}</h2>
                <div>
                    <h3>tracking sucs: {this.props.user.does_sucs}</h3>
                    <h3>upcoming races:</h3>
                    <h4>all above in conditional div on whether user has been got</h4>
                </div>
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