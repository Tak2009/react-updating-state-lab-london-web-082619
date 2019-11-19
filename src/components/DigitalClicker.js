// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }
    
    // //check with Morgan
    // handleClick = () => {
    //     let newTimesClicked = this.state.timesClicked + 1
    //     this.setState ({
    //         timesClicked: newTimesClicked
              
    //         })
    // }

    handleClick = () => {
        this.setState(previousState => {
            console.log(previousState)
            console.log(previousState.timesClicked)
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    

    render () {
        return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>

        )
    }
}

export default DigitalClicker