import React from 'react';
import './App.css';
import Touches from './components/Touches';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      touches:["AC","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="],
      currenInput:"",
      isTyping:false,
      pValue:0,
      operator:"",
      finalResult:0
    }
  }
  // displayValues=()=>{
  //   // const operators=["+/-","%","/","*","-","+"];
  //   const pStr=this.state.touches.join("");
  //   const noDisplayValues=pStr.match(/[^0-9.]/)||[];
  //   if(noDisplayValues.length) return false;
  //   else return true;
  // }

  handleCalculation=()=>{
    const {pValue,currenInput}=this.state;
    switch (this.state.operator) {
      case "+":
        this.setState({
          finalResult:pValue+Number(currenInput)
        })
        break;
      case "-":
        this.setState({
          finalResult:pValue-Number(currenInput)
        })
        break;
      case "*":
        this.setState({
          finalResult:pValue*Number(currenInput)
        })
        break;
      case "/":
        this.setState({
          finalResult:Math.round(pValue/Number(currenInput))
        })
        break;
      case "%":
        this.setState({
          currenInput:pValue/100
        })
        break;
      case "+/-":
        this.setState({
          currenInput:-pValue
        })
        break;
    
      default:
        break;
    }
  }

  handleClick=(e)=>{
    const operators=["+/-","%","/","*","-","+"];
    const validDisplay=["1","2","3","4","5","6","0",".","7","8","9"];
    // if number display
    if(validDisplay.includes(e.target.value)){
      const touches=[...this.state.touches];
      touches.shift();
      touches.unshift("C")
      this.setState({
        touches:touches,
        isTyping:true,
        currenInput:this.state.currenInput+e.target.value,
         
      })
    }
    // if AC key, erase
    if(e.target.value==="AC") this.setState({
     
      isTyping:false,
      pValue:0,
      currenInput:"",
      operator:"",
      finalResult:0
    })
    if(e.target.value==="C"){
      const touches=[...this.state.touches];
      touches.shift();
      touches.unshift("AC")
      this.setState({
        currenInput:"",
        isTyping:false
      })
    }
    if(operators.includes(e.target.value)){
      this.setState({
        pValue:this.state.finalResult || Number(this.state.currenInput),
        finalResult:Number(this.state.currenInput),
        currenInput:"",
        isTyping:true,
        operator:e.target.value
      })

    }

    if(e.target.value==="="){
      
      this.handleCalculation();
      this.setState({isTyping:false})
      
    }

  }
 
  
  render() { 
    return (
      <div id="main">
        <div id="result">{ this.state.isTyping? this.state.currenInput : this.state.finalResult}</div>
        <Touches onSelectDigit={this.handleClick} touches={this.state.touches}/>

      </div>
    );
  }
}
 
export default App;




