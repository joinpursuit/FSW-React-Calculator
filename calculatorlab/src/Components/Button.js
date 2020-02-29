import React from 'react'
import DisplayValueForm from './DisplayValueForm'

class Button extends React.Component {
    state = {
        buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "="]
    }
    handleClick = (e) => {
        e.preventDefault();
        return(
            this.setState({value: e.target.value})
        )
      }
    render() {
      const { buttons } = this.state
      let calcButtons = buttons.map(button => {
          debugger
        return( <button value={button} key={button} onClick={this.handleClick}>{button}</button> )
    })
      return (
        <div className="App">
          <form className= "buttonContainer"></form>
          {calcButtons}
        </div>
      );
    }
    
}


export default Button;