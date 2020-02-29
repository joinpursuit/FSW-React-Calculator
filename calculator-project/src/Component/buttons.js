import React, { Component } from 'react'
import "../CSS/buttons.css"
import "../App"


class Buttons extends Component{

   render(){

       return(
           <div className="buttons">
    
        <div className="set1" id="set1">
        <button name="clear" className="clear" onClick={e => this.props.onClick(e.target.name)}>AC</button>
        <button name="+-" className="+-" onClick={e => this.props.onClick(e.target.name)}>+-</button>
        <button name="/" id="divide" className="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
        </div>
        
         <div className = "set2" id="set2">
         <button name="7" className="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
         <button name="8" className="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
         <button name="9" className="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
         <button name="*" id="times" className="x"onClick={e => this.props.onClick(e.target.name)}>*</button>
         </div>
         
         <div className = "set3" id="set3">
         <button name="4" className="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
         <button name="5" className="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
         <button name="6" className="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
         <button name="-" id="minus" className="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
         </div>
     
         <div className= "set4" id="set4">
         <button name="1" className="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
         <button name="2" className="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
         <button name="3" className="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
         <button name="+" className="+" id="plus" onClick={e => this.props.onClick(e.target.name)}>+</button>
         </div>
         <div className = "set5" id="set5">
         <button name="0" className="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
         <button name ="." className="." onClick={e => this.props.onClick(e.target.name)}>.</button>
         <button name="=" id="equal" className="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
     
       
         </div>
     
         
    </div>
     
     
     
     )
     
    }
       
}

export default Buttons