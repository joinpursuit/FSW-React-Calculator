import React from 'react';

class KeyPad extends React.Component {

  render() {
   return(
    // <div className="frame">
    // <div className="result"></div>
    // <div className="values">

    //   <div className="column1">
    //     <button>AC</button>
    //     <button>+/-</button>
    //     <button>%</button>
    //     <button>÷</button>
    //   </div>
 
    //   <div className="column2"></div>
    //     <button>7</button>
    //     <button>8</button>
    //     <button>9</button>
    //     <button>X</button>
    //     <div>

    //   <div className="column3">
    //     <button>4</button>
    //     <button>5</button>
    //     <button>6</button>
    //     <button>-</button>
    //   </div>
  
    //   <div className="column4">
    //     <button>1</button>
    //     <button>2</button>
    //     <button>3</button>
    //     <button>+</button>
    //   </div>
  
    //   <div className="column5">
    //     <button>0</button>
    //     <button>.</button>
    //     <button>=</button>
    //   </div>

    // </div>
    
    // </div>
    // </div>


    <div class="calculator">

  <input type="text" class="calculator-screen" value="0" disabled />

  <div class="calculator-keys">

    <button type="button" class="all-clear" value="all-clear">AC</button>
    <button type="button" class="operator" value="+/-">+/-</button>
    <button type="button" class="operator" value="%">%</button>
    <button type="button" class="operator" value="/">÷</button>

    <button type="button" value="7">7</button>
    <button type="button" value="8">8</button>
    <button type="button" value="9">9</button>
    <button type="button" class="operator" value="X">X</button>


    <button type="button" value="4">4</button>
    <button type="button" value="5">5</button>
    <button type="button" value="6">6</button>
    <button type="button" class="operator" value="-">-</button>


    <button type="button" value="1">1</button>
    <button type="button" value="2">2</button>
    <button type="button" value="3">3</button>
    <button type="button" class="operator" value="+">+</button>


    <button type="button" class="zero" value="0">0</button>
    <button type="button" class="decimal" value=".">.</button>
    <button type="button" class="equal-sign" value="=">=</button>

  </div>
</div>
   )
  }
}

export default KeyPad