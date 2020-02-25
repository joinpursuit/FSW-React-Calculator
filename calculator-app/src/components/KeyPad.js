import React from 'react';
// import Formulas from './Formulas' 

class KeyPad extends React.Component {
  
  render() {
   return(
  

  <div className="calculator">

  <input type="text" className="calculator-screen" value="0" disabled />

  <div className="calculator-keys" >

    <button type="button" className="all-clear" value="all-clear">AC</button>
    <button type="button" className="operator" value="+/-" onClick={this.handleOperator}>+/-</button>
    <button type="button" className="operator" value="%" onClick={this.handleOperator}>%</button>
    <button type="button" className="operator" value="/" onClick={this.handleOperator}>÷</button>

    <button type="button" value="7" onClick={this.handleClick}>7</button>
    <button type="button" value="8" onClick={this.handleClick}>8</button>
    <button type="button" value="9" onClick={this.handleClick}>9</button>
    <button type="button" className="operator" value="X" onClick={this.handleOperator}>X</button>


    <button type="button" value="4" onClick={this.handleClick}>4</button>
    <button type="button" value="5" onClick={this.handleClick}>5</button>
    <button type="button" value="6" onClick={this.handleClick}>6</button>
    <button type="button" className="operator" value="-" onClick={this.handleOperator}>-</button>


    <button type="button" value="1" onClick={this.handleClick}>1</button>
    <button type="button" value="2" onClick={this.handleClick}>2</button>
    <button type="button" value="3" onClick={this.handleClick}>3</button>
    <button type="button" className="operator" value="+" onClick={this.handleOperator}>+</button>


    <button type="button" className="zero" value="0" onClick={this.handleClick}>0</button>
    <button type="button" className="decimal" value="." onClick={this.handleOperator}>.</button>
    <button type="button" className="equal-sign" value="=" onClick={this.handleResult}>=</button>

  </div>
  </div>
   )
  }
}

export default KeyPad