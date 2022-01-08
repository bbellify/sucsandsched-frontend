import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/userActions'


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
            <div>
                <h2>Hey, {this.props.username}</h2>
                <h3>tracking sucs: false</h3>
                <h3>upcoming races:</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        username: state.user.username
    }
}

export default connect(mapStateToProps, { getUser })(Account);