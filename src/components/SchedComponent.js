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
           <img src={sched} alt='sched' width='100%'/>
        )
    }

}

const mapStateToProps = state => {
    return {
      
    }
}

export default connect(mapStateToProps, { })(SchedComponent)