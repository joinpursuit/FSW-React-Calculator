import React from 'react'
import './Calculator.css'

class Calculator extends React.Component {
    state = {}

    render() {
        return (
            <div id="calculator">
                <div className="display">0</div>
                <button className="displayPeach">A/C</button>
                <button className="displayPeach">C</button>
                <button className="displayPeach">%</button>
                <button className="displayPeach">/</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="displayPeach">x</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="displayPeach">-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="displayPeach">+</button>
                <button>+/-</button>
                <button>0</button>
                <button>.</button>
                <button className="displayPeach">=</button>
            </div>
        )
    }
}

export default Calculator