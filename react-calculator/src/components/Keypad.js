import React from 'react';

class Keypad extends React.Component{

    render(){
        return(
            <div className="keypad">
            <div>
                <button name="AC">AC</button>
            </div>
            <div>
                <button name="%">%</button>
            </div>
            <div>
                <button name="+-"> +-</button>
            </div>
            <div>
                <button name="7">7</button>
            </div>
            <div>
                <button name="8">8</button>
            </div>
            <div>
                <button name="9">9</button>
            </div>
            <div>
                <button name="x">X</button>
            </div>
            <div>
                <button name="4">4</button>
            </div>
            <div>
                <button name="5">5</button>
            </div>
            <div>
                <button name="6">6</button>
            </div>
            <div>
                <button name="-">-</button>
            </div>
            <div>
                <button name="1">1</button>
            </div>
            <div>
                <button name="2">2</button>
            </div>
            <div>
                <button name="3">3</button>
            </div>
            <div>
                <button name="+">+</button>
            </div>
            <div>
                <button name="0">0</button>
            </div>
            <div>
                <button name=".">.</button>
            </div>
            <div>
                <button name="=">=</button>
            </div>

            </div>
        )
    }
}

export default Keypad;