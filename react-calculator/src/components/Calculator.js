import { Component } from "react";

class Calculator extends Component {
  render() {
    return (
      <section className="wrapper">
        <section className="Calculator">
          <form>
            <input type="text" />
            <div className="one">
              <input type="button" value="AC" />
              <input type="button" value="+/-" />
              <input type="button" value="%" />
              <input type="button" value="/" />
            </div>
            <div className="two">
              <input type="button" value="7" />
              <input type="button" value="8" />
              <input type="button" value="9" />
              <input type="button" value="*" />
            </div>
            <div className="three">
              <input type="button" value="4" />
              <input type="button" value="5" />
              <input type="button" value="6" />
              <input type="button" value="-" />
            </div>
            <div className="four">
              <input type="button" value="1" />
              <input type="button" value="2" />
              <input type="button" value="3" />
              <input type="button" value="+" />
            </div>
            <div className="five">
              <input type="button" value="0" />
              <input type="button" value="00" />
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
