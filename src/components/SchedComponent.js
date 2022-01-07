import React from 'react'
import { connect } from 'react-redux';

import sched from '../assets/sched.JPEG'

class SchedComponent extends React.Component {

    handleChanges = e => {
        console.log(e.target.value)
    }

    handleCLick = () => {
        console.log('click')
    }

    componentDidMount() {
        
    }

    render() {

        return (
           <img source={sched} alt='sched'/>
        )
    }

}

const mapStateToProps = state => {
    return {
      
    }
}

export default connect(mapStateToProps, { })(SchedComponent)