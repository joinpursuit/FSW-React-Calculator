import React from 'react'
import DisplayValueForm from './DisplayValueForm'

class Button extends React.Component {
    state = {
        buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "="],
        display: ""
    }
    loadValue = (value) => {
        this.setState({display:this.state.display + value})
        console.log(this.state.display);
        
    }
    handleClick = (e) => {
        e.preventDefault();  
             
        return(
            this.loadValue(e.target.value) 
        ) 
      }

    render() {
      const { buttons, display } = this.state
      let calcButtons = buttons.map(button => {
        //   debugger
        return( <button value={button} key={button} onClick={this.handleClick}>{button}</button> )
    })
      return (
        <div className= "buttonContainer">
          {calcButtons}
          {/* <DisplayValueForm value={display}/>  */}
        </div>
        
      );
    }
    
}


export default Button;