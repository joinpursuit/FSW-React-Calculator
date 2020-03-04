import React from 'react';
import Results from './Results'
import * as math from "mathjs"
class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: "",
            previousDisplay: '', 
            Operators: null,
            previousDisplay: null,
            hasOperator:false
            

        }
    }
 
    buttonValue(event){
        const newValue = event.target.value
        const {display, hasOperator} = this.state
        if(hasOperator){
            this.setState({display: String(newValue), hasOperator: false})
        } else if(newValue === "" && display ===""){
            this.setState({display: newValue})
        }else{
            this.setState({display:display===""?newValue:display+newValue})
        }

}
    handleEquation = () => {
      
        let { display, Operators, previousDisplay } = this.state
        if (Operators === '+') {
          this.setState({ display:(Number(display)+ Number(previousDisplay))})
        } else if (Operators === '-') {
            this.setState({display:(Number(display)-Number(previousDisplay)) })
        } else if (Operators === '*') {
            this.setState({ display:(Number(display)* Number(previousDisplay))})
        } else if (Operators === '/') {
            this.setState({ display:(Number(display) / Number(previousDisplay))})
        }
    }


    decimal = (event) => {
        let {display} = this.state
        let decimal = event.target.value
        this.setState({
            display:display + decimal })
    }
    percentage = () => {
        let { display } = this.state
        this.setState({ display: display / 100 })
    }
    invertButton = (event)=>{
        let { display } = this.state
        this.setState({display: - display})
    }

    operatorButtons =(event)=>{

    }
  
      acButton =()=>{
          let {display}=this.state
        this.setState({display:0})
      }

    render() {
        let {display} = this.state
       
        return (
            <div className="Calculator">
                <Results className ="Results"display={display} />
                <div className="Buttons">
                    <div>

                        <button className="Others" value="0" onClick={(e) => { this.acButton(e) }} >AC</button>
                        <button value="7" onClick={(e) => { this.buttonValue(e)}}>7</button>
                        <button value="4 " onClick={(e) => { this.buttonValue(e)}} >4</button>
                        <button value="1 " onClick={(e) => { this.buttonValue(e)}}>1</button>
                        <button className="Zero" value="0 " onClick={(e) => {this.buttonValue(e)}}>0</button>
                    </div>
                    <div>

                        <button className="Others" value="- "onClick={(e) => {this.invertButton(e)}}>+/-</button>
                        <button value="8 " onClick={(e) => { this.buttonValue(e)}}>8</button>
                        <button value="5 " onClick={(e) => { this.buttonValue(e)}}>5</button>
                        <button value="3 " onClick={(e) => { this.buttonValue(e)}}>3</button>
                    </div>
                    <div>
                        <button className="Others" value="% " onClick={(e) => { this.percentage(e) }}>%</button>
                        <button value="9 " onClick={(e) => { this.buttonValue(e)}}>9</button>
                        <button value="6" onClick={(e) => { this.buttonValue(e)}}>6</button>
                        <button value="2 " onClick={(e) => { this.buttonValue(e)}}>2</button>
                        <button value=". " onClick={(e) => { this.decimal(e)}}>.</button>
                    </div>
                    <div>

                        <button className="Operators" value="/" onClick={(e) => { this.operatorButtons(e)}}>÷</button>
                        <button className="Operators" value="x" onClick={(e) => { this.operatorButtons(e)}} >x</button>
                        <button className="Operators" value="-" onClick={(e) => { this.operatorButtons(e)}}>-</button>
                        <button className="Operators" value =" +"onClick={(e) => { this.operatorButtons(e)}}>+</button>
                        <div>
                            <button className="Equal" value ="=" onClick={(e) => { this.handleEquation()}}>=</button>

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