import React from 'react';
import Results from './Results'

class Calculator extends React.Component{
    state = {
        display: 0
    }
    buttonValue(event){
    
      this.setState({display:event.target.value})

    }
    addition(event){
        this.setState({result: (num1, num2) => num1 + num2})
    }
    subtraction(){
        this.setState({result: (num1, num2) => num1 - num2})
    }
    multiplication(){
        this.setState({result: (num1, num2) => num1 * num2})
    }
    division(){
        this.setState({result: (num1, num2) => num1 / num2})
    }

    render(){
        return(
            <div className="Calculator">
                <Results/>
            <div className="Buttons">
<div>

<button className="Others">AC</button> 
<button value = "7" onClick = {this.buttonValue}>7</button>
<button value = "4 "onClick = {this.buttonValue} >4</button>
<button value = "1 "onClick = {this.buttonValue}>1</button>
<button className="Zero" value = "0 "onClick = {this.buttonValue}>0</button>
</div>
<div>

<button className="Others">+/-</button>
<button value = "8 "onClick = {this.buttonValue}>8</button>
<button value = "5 "onClick = {this.buttonValue}>5</button>
<button value = "3 "onClick = {this.buttonValue}>3</button>
</div>
<div>
<button className="Others"value = "% "onClick = {this.buttonValue}>%</button>
<button value = "9 "onClick = {this.buttonValue}>9</button>
<button value = "6"onClick = {this.buttonValue}>6</button>
<button value = "2 "onClick = {this.buttonValue}>2</button>
<button value = ". "onClick = {this.buttonValue}>.</button>
</div>
<div>

<button className="Operators"onClick = {this.division}value = "/">÷</button>
<button className="Operators"onClick = {this.multiplication} value = "* ">x</button>
<button className="Operators"onClick = {this.subtraction}value = " - ">-</button>
<button className="Operators"onClick = {this.addition} value = " + ">+</button> 
    <div>
<button className="Equal">=</button>

    </div>
</div>


<div>

</div>
               
             
            </div>
            </div>
           
        )
    }
}

export default Calculator;