import React from 'react';

class Calculator extends React.Component{
    state = {
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
    }
    
    render () {
        return (
            <div>This Is My Calcultor</div>
        )
    }
}

export default Calculator;