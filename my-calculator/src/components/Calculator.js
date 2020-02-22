import React from 'react';
import Display from './Display';

class Calculator extends React.Component{
    state = {
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
    }
    
    render () {
        return (
            <div>
                <Display displayValue={this.state.displayValue}/>
            </div>
        )
    }
}

export default Calculator;