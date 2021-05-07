import Calculator from "./components/Calculator";
import Calculation from "./components/Calculation";
import React from "react";
import "./App.css";

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Calculator handleButton={this.handleButton} handleClear={this.handleClear} handlePosNeg={this.handlePosNeg} handleOperation={this.handleOperation} input={this.state.input} handleDecimal={this.handleDecimal} handlePercentage={this.handlePercentage} handleZero={this.handleZero} calculate={this.calculate}/>
        <Calculation input={this.state.input} />
      </div>
    );
  }
}

export default App;
