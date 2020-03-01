import React from 'react';
import Results from './Results'
import * as math from "mathjs"
class Calculator extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            display: 0,
            allClear: "AC",
            Operators: null,
            nextDisplay: null,
    
        }
    }
    buttonValue(event){

            this.setState({display:event.target.value})
            console.log(this.state.display)

    }

    addition(event){
        this.setState({display: (display, nextDisplay) => display + nextDisplay})
    }
    subtraction(event){
        this.setState({display: (display, nextDisplay) => display - nextDisplay})
    }
    multiplication(event){
        this.setState({display: (display, nextDisplay) => display * nextDisplay})
    }
    division(event){
        this.setState({display: (display, nextDisplay) => display / nextDisplay})
    }
    equal =(event)=>{
        this.setState({display:math.evaluate()})
    }
    equalsZero  =()=>{
        this.setState({display:0})
    }
    // decimal =()=>{
    //     this.setState(display=>({
    //         nextDisplay: `${display}.${nextDisplay} + .`
    //     }))
    // }
    // percentage = ()=>{
    //     this.setState({display: display / 100})
    // }

    render(){
        return(
            <div className="Calculator">
                <Results/>
            <div className="Buttons">
<div>

<button className="Others" onClick ={this.equalsZero}>AC</button> 
<button value = "7" onClick={(e)=>{this.buttonValue(e)}}>7</button>
<button value = "4 "onClick = {(e)=>{this.buttonValue(e)}} >4</button>
<button value = "1 "onClick = {(e)=>{this.buttonValue(e)}}>1</button>
<button className="Zero" value = "0 "onClick = {(e)=>{this.buttonValue(e)}}>0</button>
</div>
<div>

<button className="Others">+/-</button>
<button value = "8 "onClick ={(e)=>{this.buttonValue(e)}}>8</button>
<button value = "5 "onClick ={(e)=>{this.buttonValue(e)}}>5</button>
<button value = "3 "onClick ={(e)=>{this.buttonValue(e)}}>3</button>
</div>
<div>
<button className="Others"value = "% " onClick = {(e)=>{this.percentage(e)}}>%</button>
<button value = "9 "onClick ={(e)=>{this.buttonValue(e)}}>9</button>
<button value = "6"onClick ={(e)=>{this.buttonValue(e)}}>6</button>
<button value = "2 "onClick ={(e)=>{this.buttonValue(e)}}>2</button>
<button value = ". "onClick ={(e)=>{this.decimal(e)}}>.</button>
</div>
<div>

<button className="Operators"onClick = {(e)=>{this.division(e)}}>÷</button>
<button className="Operators"onClick = {(e)=>{this.multiplication(e)}} >x</button>
<button className="Operators"onClick = {(e)=>{this.subtraction(e)}}>-</button>
<button className="Operators"onClick = {(e)=>{this.addition(e)}}>+</button> 
    <div>
<button className="Equal"onClick ={(e)=>{this.equal(e)}}>=</button>

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