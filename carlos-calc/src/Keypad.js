import React from 'react'

class Keypad extends React.Component {
    render() {
        const {calculate, handleClick, addition, subtract, division, multiplication, negative, reset} = this.props;
        return (
            <section className="keypad">
                <button className="numbers"onClick= {handleClick} value = "1" >1</button>
                <button className="numbers"onClick= {handleClick} value = "2">2</button>
                <button className="numbers"onClick= {handleClick} value = "3">3</button>
                <button onClick= {addition} value = "+">+</button><br/>
                <button className="numbers"onClick= {handleClick} value = "4">4</button>
                <button className="numbers"onClick= {handleClick} value = "5">5</button>
                <button className="numbers"onClick= {handleClick} value = "6">6</button>
                <button onClick= {subtract} value = "-">-</button><br/>
                <button className="numbers"onClick= {handleClick} value = "7">7</button>
                <button className="numbers"onClick= {handleClick} value = "8">8</button>
                <button className="numbers"onClick= {handleClick} value = "9">9</button>
                <button onClick= {division} value = "/">/</button><br/>
                <button name ="C" onClick={reset}>C</button>
                <button className="numbers"onClick= {handleClick} value = "0">0</button>
                <button onClick= {negative} value = "negative">+/-</button>
                <button onClick= {multiplication} value = "*">*</button><br/>
                <button onClick={calculate} value = "=">=</button>


            </section>
        )
    }
}

export default Keypad