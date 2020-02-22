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
    
    render () {
        let {displayValue} = this.state
        return (
            <div>
                <Display displayValue={displayValue}/>
                <KeyPad />
            </div>
        )
    }
}

export default Calculator;