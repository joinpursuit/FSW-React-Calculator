import React from 'react';
import Results from './Results'
import * as math from "mathjs"
class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 0,
            allClear: 0,
            Operators: null,
            nextDisplay: null,
            nextValue:false
            

        }
    }
    buttonValue(event){
          let newValue = event.target.value
        let {display, nextDisplay} = this.state
      
        this.setState({display:newValue, nextDisplay: newValue})
        console.log(this.state.display)

}
    handleEquation = () => {
      
        let { display, Operators, nextDisplay } = this.state
        if (Operators === '+') {
          this.setState({ display:(Number(display)+ Number(nextDisplay))})
        } else if (Operators === '-') {
            this.setState({display:(Number(display)-Number(nextDisplay)) })
        } else if (Operators === '*') {
            this.setState({ display:(Number(display)* Number(nextDisplay))})
        } else if (Operators === '/') {
            this.setState({ display:(Number(display) / Number(nextDisplay))})
        }
    }


    decimal = (event) => {
        let { display, nextDisplay } = this.state
        this.setState(display => ({
            nextDisplay: `${display}.${nextDisplay} + .`
        }))
    }
    percentage = (event) => {
        let { display } = this.state
        this.setState({ display: display / 100 })
    }
    invertButton = (event)=>{
        let { display } = this.state
        this.setState({display: - display})
    }
    operatorButtons =(event)=>{
        let {type} = event.target
        let {display}=this.state
        this.setState({   nextValue:true,
            Operators:type,
            nextDisplay:Number(display)})
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