import React from 'react';


class Formulas extends React.Component {
  state = {
    displayValue: 0,
    previousValue: null,
    nextValue: null,
    operation:"",
  }
  
  
  handleClick = (value) => {
    let btnValue = value;
    let displayNum = this.state.displayValue
    if(displayNum === "0") {
      console.log(displayNum)
      displayNum = btnValue
    }
  }
  // handleOperator = () => {

  // }

  render() {
   return(
    <div> 
      {/* <input type="text" class="calculator-screen" value={} disabled /> */}
    </div>
   )
  }
 }

export default Formulas