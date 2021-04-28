import { Component } from "react";
import formatNums from "../helpers/formatNums"
import "../styles/Calculator.css";

class Calculator extends Component {
  state = { input: "" };

  handleNumbers = (e) => {
    this.setState((prevState) => ({ input: formatNums(prevState.input + e.target.value)}));
  };

  handleOperators = (e) => {
    const { value } = e.target
    const { input } = this.state
    if(value === "+/-") {
        this.setState({input: input * -1})
    }
  };

  handleSubmit = (e) => {
    e.preventDefalut();
  };

  render() {
    const { input } = this.state;
    return (
      <section className="wrapper">
        <section className="Calculator">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={input || 0} readOnly={true}/>
            <div className="one">
              <input type="button" value="AC" />
              <input type="button" value="+/-" onClick={this.handleOperators}/>
              <input type="button" value="%" />
              <input type="button" value="/" />
            </div>
            <div className="two">
              <input type="button" value="7" onClick={this.handleNumbers} />
              <input type="button" value="8" onClick={this.handleNumbers} />
              <input type="button" value="9" onClick={this.handleNumbers} />
              <input type="button" value="*" />
            </div>
            <div className="three">
              <input type="button" value="4" onClick={this.handleNumbers} />
              <input type="button" value="5" onClick={this.handleNumbers} />
              <input type="button" value="6" onClick={this.handleNumbers} />
              <input type="button" value="-" />
            </div>
            <div className="four">
              <input type="button" value="1" onClick={this.handleNumbers} />
              <input type="button" value="2" onClick={this.handleNumbers} />
              <input type="button" value="3" onClick={this.handleNumbers} />
              <input type="button" value="+" />
            </div>
            <div className="five">
              <input type="button" value="0" onClick={this.handleNumbers} />
              <input type="button" value="00" onClick={this.handleNumbers} />
              <input type="button" value="." />
              <input type="button" value="=" />
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default Calculator;
