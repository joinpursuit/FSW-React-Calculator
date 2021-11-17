import { Component } from 'react'
import "./App.css";



class App extends Component {

  //Build Constructor 

  constructor() {
    super();

    this.state = {
      firstNumber: "",
      secondNumber: "",
      mode: "",
      displaySays: 0,
    }
  }


  //To create 

  handleClick = button => {

    if (button === "=") {
      this.execute()
    }

    else if (button === "Clear") {
      this.reset()

    }

    else if (button === "+/-") {
      this.negative()
    }

    // Any other button - needs to change the state of the display + button selected
    else {
      this.setState({
        displaySays: this.state.displaySays + button
      })
    }


  }

  setMode = (event) => {
    this.setState({
      mode: event.target.value,
      displaySays: 0
    })
  }

  negative = () => {
    this.setState({
      displaySays: (this.state.displaySays) * -1
    })
  }

  // To calaculate result when = is pressed - accessed through if statement 

  reset = () => {
    this.setState({
      displaySays: 0
    })
  }


  execute = () => {
    //numbers

    let answer = ""

    const { firstNumber, secondNumber } = this.state



    if (this.state.mode === "x") {
      answer = this.state.displaySays(Number(firstNumber) * Number(secondNumber))
    } else if (this.state.mode === "/") {
      answer = this.state.displaySays(Number(firstNumber) * Number(secondNumber))
    } else if (this.state.mode === "+") {
      answer = this.state.displaySays(Number(firstNumber) + Number(secondNumber))
    } else if (this.state.mode === "-")
      answer = this.state.displaySays(Number(firstNumber) - Number(secondNumber))

    this.setState({
      displaySays: this.state.answer
    })



  }







 







  render() {
    return (
      <div className="calcBorder">
        {/* <Display displaySays={this.state.displaySays} /> */}
        {/* <KeyPad onClick={this.onClick} /> */}

        <div className="display">
          {this.state.displaySays}
        </div>

        <div className="calcButtons">

          <div className="additional-function-buttons">
            <button name="x" onClick={event => this.handleClick(event.target.name)}> x </button>
            <button name="+" onClick={event => this.handleClick(event.target.name)}> + </button>
            <button name="-" onClick={event => this.handleClick(event.target.name)}> - </button>
            <button name="/" onClick={event => this.handleClick(event.target.name)}> / </button>
          </div>


          <button name="1" onClick={event => this.handleClick(event.target.name)}> 1 </button>
          <button name="2" onClick={event => this.handleClick(event.target.name)}> 2 </button>
          <button name="3" onClick={event => this.handleClick(event.target.name)}> 3 </button>
          <button name="4" onClick={event => this.handleClick(event.target.name)}> 4 </button>
          <br />
          <button name="5" onClick={event => this.handleClick(event.target.name)}> 5 </button>
          <button name="6" onClick={event => this.handleClick(event.target.name)}> 6 </button>
          <button name="7" onClick={event => this.handleClick(event.target.name)}> 7 </button>
          <button name="8" onClick={event => this.handleClick(event.target.name)}> 8 </button>
          <br />
          <button name="9" onClick={event => this.handleClick(event.target.name)}> 9 </button>
          <button name="0" onClick={event => this.handleClick(event.target.name)}> 0 </button>


          <button name="+/-" id="negative-positive" onClick={event => this.handleClick(event.target.name)}> +/- </button>
          <button name="Clear" id="clear-bttn" onClick={event => this.handleClick(event.target.name)}> Clear </button>
          <br />


          <div className="calculate-button">
            <button name="=" onClick={event => this.handleClick(event.target.name)}> = </button>
          </div>

        </div>
      </div>
    );
  }

}

export default App;
