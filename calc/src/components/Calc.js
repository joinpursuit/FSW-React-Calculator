import React from "react"
import Display from "./Display"
import Buttons from "./Buttons"
import {numValues,dispMods,opValues} from "./db/ButtonValues"

class Calc extends React.Component{
    state={
        displayValue:"0",
        previousValue:"",
        previousValue2:"",
        opertion:"",
        waitingForNewValue: false,
        justCleared:true
    }
    handleOpClick=(e)=>{
        if(e.target.value !== "="){
            
            let newOp =e.target.value

            if(newOp === "x"){
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
        let newNum = e.target.value
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
                <Display input={displayValue}/>
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