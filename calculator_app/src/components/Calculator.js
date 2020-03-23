import React from 'react';
import DisplayCalculator from './displayCalculator'
import Keyboard from './Keyboard'

const Calculator = () => {
    return (
        <div className="calculatorContainer">
        <DisplayCalculator />
        <Keyboard />
        </div>
    )
}

export default Calculator