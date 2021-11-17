import React from 'react';
import './App.css';
import Touches from './components/Touches';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      touches:["AC","DEL","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="],
      currenInput:"",
      pValue:0,
      operator:"",
      isTyping:false
    }
    
  }
  
  handleCalculation=()=>{

    const {operator,pValue,currenInput}= this.state;
    if(currenInput==="") return pValue;
    switch (operator) {
      case "+":
        this.setState({
          pValue:pValue+Number(currenInput),
                
        })
        break;
      case "-":
        this.setState({
          pValue:pValue-Number(currenInput),
          
        })
        break;
      case "*":
        this.setState({
          pValue:pValue*Number(currenInput),
          
        })
        break;
      case "/":
        this.setState({
          pValue:Math.round(pValue/Number(currenInput)),
          
        })
        break;
    
      default:
        
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
    // An operator is clicked
    if(operators.includes(e.target.value)){
      if(this.state.isTyping){
        this.setState({
          operator:e.target.value,
          pValue:Number(this.state.currenInput),
          currenInput:"",
          classStatus:"",
          isTyping:false
        });

      }
      else this.setState({
          operator:e.target.value,
          currenInput:"",
          isTyping:true

      })
      
      
      
    }
    
    switch (e.target.value) {
      case "AC":
        this.setState({
          pValue:0,
          currenInput:"",
          operator:"",
          isTyping:false,
        })    
        break;
      case "C":
        const touches=[...this.state.touches];
        touches.shift();
        touches.unshift("AC")
        this.setState({
          currenInput:"",
          touches:touches,
          isTyping:false,    
        })
        break;
      case "DEL":
        const removeLastDigit= this.state.isTyping? this.state.currenInput:this.state.pValue;
        const strArr=removeLastDigit.toString().split("");
        strArr.pop();
        const str=strArr.join("");
        this.setState({
          currenInput:str,
          isTyping:true
        })
        break;
      case "+/-":
        if(this.state.isTyping){
          this.setState({
            currenInput:-this.state.currenInput
          })
        }else{
          this.setState({
            pValue:-this.state.pValue
          })
        }
        
        
        break;
      case "%":
        if(this.state.isTyping){
          this.setState({
            currenInput:Number(this.state.currenInput)/100
          })
        }else{
          this.setState({
            pValue:this.state.pValue/100
          })
        }
        break;
      case "=":
        this.handleCalculation();
        this.setState({ isTyping:false, currenInput:""});

        break;
        case "+":
          this.handleCalculation();
          this.setState({ isTyping:false});
          break;
        case "-":
          this.handleCalculation();
          this.setState({ isTyping:false});
          break;
        case "/":
          this.handleCalculation();
          this.setState({ isTyping:false});
          break;
        case "*":
          this.handleCalculation();
          this.setState({ isTyping:false});
          break;

      default:
        break;
    }

  }
 
  formatting=(str)=>{
    if(typeof str ==="number") str=str.toString();
    const isNegative=str.includes("-");
    if(isNegative) str=str.slice(1);
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
      let formatVal= returnVal[0]===","?returnVal.slice(1):returnVal;
      formatVal= isfloatNum? formatVal+"."+decPart:formatVal;
      return isNegative?"-"+formatVal:formatVal;
    }
    return isNegative? "-"+str:str;
  }
  
  render() { 
    
    return (
      <div id="main">
        <div id="result">
          <div id="previousVal">{`Ans=${this.formatting(this.state.pValue)}`}</div>
          <div className="currentResult">{this.state.isTyping? this.formatting(this.state.currenInput) : this.formatting(this.state.pValue)}</div>
        </div>
        <Touches onSelectDigit={this.handleClick} touches={this.state.touches}/>

      </div>
    );
  }
}
 
export default App;





