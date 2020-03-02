import React, {Component} from 'react';
import Display from './Display';
import KeyPad from './KeyPad';

class Calculator extends Component{
    state = {
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
    }

    handleOnClick(button) {
        if(button === "="){
            this.setState({})
        }
        else if(button === "AC"){
            this.setState({displayValue: 0, previousValue:null})
        }
        else if(button === "C"){
            this.setState({displayValue: 0})
        }
        else {
            this.setState({displayValue: this.displayValue + e.target.name})
        }
    }

    render () {
        let {displayValue} = this.state
        return (
            <div>
                <Display displayValue={displayValue}/>
                <KeyPad onClick={this.handleOnClick}/>
            </div>
        )
    }
}

export default Calculator;