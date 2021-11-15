import React from 'react';
import './App.css';
import Touches from './components/Touches';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      touches:["AC","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="],
      currenInput:"",
      isTyping:false,
      pValue:0,
      operator:"",
      finalResult:0,
      
      
    }
    
  }
  multipleEquals=(e)=>{
    if(e.target.value==="=") {
      this.setState({pValue:this.state.finalResult},this.handleCalculation)
    }
  }

  handleCalculation=(e)=>{
    const {pValue,currenInput}=this.state;
    switch (this.state.operator) {
      case "+":
        this.setState({
          finalResult:pValue+Number(currenInput)
        },()=>this.multipleEquals)
        break;
      case "-":
        this.setState({
          finalResult:pValue-Number(currenInput)
        },()=>this.multipleEquals)
        break;
      case "*":
        this.setState({
          finalResult:pValue*Number(currenInput)
        },()=>this.multipleEquals)
        break;
      case "/":
        this.setState({
          finalResult:Math.round(pValue/Number(currenInput))
        },()=>this.multipleEquals)
        break;
    
      default:
        this.setState({
          finalResult:Number(currenInput)
        })
        break;
    }
  }

  handleClick=(e)=>{
    const operators=["/","*","-","+"];
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
    // if click reset current input and change C back to AC
    if(e.target.value==="C"){
      const touches=[...this.state.touches];
      touches.shift();
      touches.unshift("AC")
      this.setState({
        currenInput:"",
        isTyping:false,
        touches:touches
      })
    }
    if(operators.includes(e.target.value)){
      this.setState({
        pValue:this.state.finalResult || Number(this.state.currenInput),
        currenInput:"",
        isTyping:false,
        operator:e.target.value
      },()=>this.setState({finalResult:this.state.pValue}))

    }
    if(e.target.value==="+/-") {
      if(this.state.currenInput&&this.state.isTyping) this.setState({
        currenInput:-this.state.currenInput
      })

      else if(this.state.finalResult) this.setState({
        finalResult:-this.state.finalResult
        
      });
      
    }
    if(e.target.value==="%") {
      if(this.state.finalResult) this.setState({
        finalResult:this.state.finalResult/100
        
      });
      else this.setState({
        currenInput:this.state.currenInput/100
      })
    }

    if(e.target.value==="="){
      
      this.handleCalculation();
      this.setState({isTyping:false})
      
    }

  }
 
  formatting=(str)=>{
    str=str.toString();
    const isfloatNum=str.includes(".");
    if(str.split(".")[0].length>=4){
      if(isfloatNum){
        const decArr=str.split(".")
        str=decArr[0];
        var decPart=decArr[1];
      }
      const newStr=str.split("").reverse().join("");
      const newArr=newStr.match(/\d{3}/g)||[];
      const revStr=newArr.join("");
      const returnVal=(newArr.join(",")+","+newStr.slice(revStr.length)).split("").reverse().join("");
      const formatVal= returnVal[0]===","?returnVal.slice(1):returnVal;
      return isfloatNum? formatVal+"."+decPart:formatVal;
    }
    return str;
  }
  // formatDate=(date)=>{
  //   const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  //   const Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  //   const day=Days[date.getDay()];
  //   const month=Months[date.getMonth()];
  //   const year=date.getFullYear();
  //   const dat=date.getDate();
  //   const todayDate=`${day}, ${month} ${dat}, ${year}`;
  //   const time=Date().toString();
  //   return [todayDate,time];
  // }
  
  render() { 
    
    return (
      <div id="main">
        <div id="result">{ this.state.isTyping? this.formatting(this.state.currenInput) : this.formatting(this.state.finalResult)}</div>
        <Touches onSelectDigit={this.handleClick} touches={this.state.touches}/>

      </div>
    );
  }
}
 
export default App;






/*

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
    
      default:
        this.setState({
          finalResult:Number(currenInput)
        })
        break;
    }
  }

  handleClick=(e)=>{
    const operators=["/","*","-","+"];
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
        isTyping:false,
        touches:touches
      })
    }
    if(operators.includes(e.target.value)){
      this.setState({
        pValue:this.state.finalResult || Number(this.state.currenInput),
        // finalResult:Number(this.state.currenInput),
        currenInput:"",
        isTyping:true,
        operator:e.target.value
      })

    }
    if(e.target.value==="+/-") {
      if(this.state.finalResult) this.setState({
        finalResult:-this.state.finalResult
        
      });
      else this.setState({
        currenInput:-this.state.currenInput
      })
    }
    if(e.target.value==="%") {
      if(this.state.finalResult) this.setState({
        finalResult:this.state.finalResult/100
        
      });
      else this.setState({
        currenInput:this.state.currenInput/100
      })
    }

    if(e.target.value==="="){
      
      this.handleCalculation();
      this.setState({isTyping:false})
      
    }

  }

  formatting=(str)=>{
    if(str.length>=4){
   
      const newStr=str.split("").reverse().join("");
      const newArr=newStr.match(/\d{3}/g)||[];
      const revStr=newArr.join("");
      const returnVal=(newArr.join(",")+","+newStr.slice(revStr.length)).split("").reverse().join("");
      return returnVal[0]===","?returnVal.slice(1):returnVal
    }
    return str;
  }
 
  
  render() { 
    return (
      <div id="main">
        <div id="result">{ this.state.isTyping? this.formatting(this.state.currenInput) : this.formatting(this.state.finalResult)}</div>
        <Touches onSelectDigit={this.handleClick} touches={this.state.touches}/>

      </div>
    );
  }
}

*/

