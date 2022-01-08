import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/userActions'

import Container from 'react-bootstrap/Container'

class Account extends React.Component {

    componentDidMount() {
        const uname = localStorage.getItem('username')
        if (!uname && ! this.props.username) {
            
            console.log('broken')
            // figure out this edge case.. modal could be nice

        } else {
            this.props.getUser(this.props.username ? this.props.username : uname)
        }

    }

    componentDidUpdate(prevProps) {
        
    }

    render() {
        return (
            <Container className='my-3'>
                <h2>welcome back {this.props.user.first_name}</h2>
                
                {this.props.user &&
                    <div>
                        <h3>tracking sucs: {this.props.user.does_sucs ? 'you bet' : 'not yet'}</h3>
                        <h3>upcoming races:</h3>
                    </div>
                }   
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

