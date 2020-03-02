import React from "react"
import Display from "./Display"
import Buttons from "./Buttons"
import {numValues,dispMods,opValues} from "./db/ButtonValues"
import { create, all } from 'mathjs'
import "../css/Calc.css"

const config = { }
const math = create(all, config)

class Calc extends React.Component{
    state={
        displayValue:"0",
        previousValue:"",
        previousValue2:"",
        opertion:"",
        waitingForNewValue: false,
        justCleared:true
    }
    handleCalc=()=>{
        this.setState(prevState=>{
            let evalValue = math.evaluate(` ${this.state.previousValue} ${this.state.opertion}${prevState.displayValue} `)
            debugger
            return {
                displayValue: evalValue.toString(),
                previousValue:"",
                opertion:"",
                waitingForNewValue:true
                }
            })   
    }
    handleOpClick=(e)=>{
        if(e.target.value === "="){
            return this.handleCalc()

        } else if(e.target.value !== "="){
            
            let newOp =e.target.value

            if(newOp === "X"){
                newOp = "*"
            } else if(newOp === "÷"){
                newOp = "/"
            }

            if(this.state.waitingForNewValue){
                let newVal = (parseFloat(`${this.state.previousValue} ${this.state.opertion} ${this.state.displayValue} `).toString())
                this.setState(prevState=>({
                    opertion:newOp,
                    previousValue: newVal,
                    waitingForNewValue:true
                    }))
            } else {
                this.setState(prevState=>({
                    opertion:newOp,
                    previousValue:prevState.displayValue,
                    waitingForNewValue:true
                    
                    })
                )
            }
        }
    }
    
    
    
    handleDecimal=()=>{
        if(!this.state.displayValue.includes(".")){
            this.setState(prevState=>({
                displayValue:prevState.displayValue+"."
            })
            )
        }
    }
    handlePosNeg=()=>{
            this.setState(prevState=>({
                    displayValue:(prevState.displayValue*-1).toString()
                })
            )

    }

    handlePercent=()=>{
        let newPrecent = (parseFloat(this.state.displayValue)/100).toString()
        this.setState({  
            displayValue:newPrecent
        }
        )
    }

    handleClear=(clearInput)=>{
        if(clearInput==="C"){
            this.setState({  
                displayValue:"0",
                justCleared:true

            })
        } else if (clearInput==="AC"){
            this.setState({  
                displayValue:"0",
                previousValue:"",
                opertion:"",
                waitingForNewValue: false,
                justCleared:true
            })
        }
    }

    handleModClick=(e)=>{
        if(e.target.value==="."){
            return this.handleDecimal()
        } else if (e.target.value==="±"){
            return this.handlePosNeg()
        } else if (e.target.value==="%"){
            return this.handlePercent()
        } else if (e.target.value==="C" || e.target.value==="AC"){
            return this.handleClear(e.target.value)
        }
    }
    handleNumClick=(e)=>{
        e.preventDefault()
        let newNum =''
        if(e.key){
             newNum=e.key
        }else{

             newNum = e.target.value
        }
        if(this.state.displayValue==="0"||this.state.displayValue.includes("e")|| this.state.waitingForNewValue===true){
            this.setState({
                displayValue:newNum,
                waitingForNewValue: false,
                justCleared:false
            })
        } else {
            this.setState(prevState=>({
                displayValue:prevState.displayValue+newNum,
                waitingForNewValue: false,
                justCleared:false
            })
            )
        }
    }

    handleKeyPress=e=>{

         const keyPressed = e.key
         debugger
        if(numValues.includes(keyPressed)){
            this.handleNumClick(e)
        } 
        // else if(opValues.includes(keyPressed))
    }

    handleComma=(displayValue)=>{
        let displayArry = []
        let decimal = ""
        let newString=""
        
        
        if(displayValue[0]==="0"||displayValue.slice(0,2)==="-0"){
            return displayValue
        } else 
        
        if (displayValue.includes(".")){
            displayValue = displayValue.split(".")
            if(displayValue[1]=== ""){
                decimal="."
            }else{
                decimal=`.${[...displayValue[1]].toString()}`
            }
            newString = displayValue[0]
        } else {
            newString = displayValue
        }
        
        while(newString.length){

            if(newString.length>3){
              displayArry.unshift(newString.slice(newString.length-3,newString.length))
              newString=newString.substring(0,newString.length-3)
            } else {
                displayArry.unshift(newString)
                newString=''
            } 
        }
    

        if(decimal){

            return `${displayArry.join().toString()} ${decimal}`
        } else{
            return displayArry.join().toString()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
      componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
      }

    render(){
        let {displayValue} = this.state
        let numButtons = numValues.map((numValue,i)=>{
            return <Buttons key={i} className={"numbers"} onClick={this.handleNumClick} value={numValue}/>
        })
        let opButtons = opValues.map((opValue,i)=>{
            return <Buttons key={i} className={"operators"} onClick={this.handleOpClick} value={opValue}/>
        })
        let displyButtons = dispMods.map((dispMod,i)=>{
            return <Buttons key={i} className={"dispMod"} onClick={this.handleModClick} value={!this.state.justCleared && dispMod==="AC" ? "C":dispMod}/>
        })
        console.log(this.state)
        return(
            <div className="calculator">
                <Display input={displayValue.length>3?this.handleComma(displayValue):displayValue}/>
                <div className="buttons">
                    {displyButtons}
                    {numButtons}
                    {opButtons}
                </div>
                
            </div>
        )
    }

}
export default Calc