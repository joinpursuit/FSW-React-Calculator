import React from "react";
import "./App.css";

class App extends React.Component {
  state = { input: "" };

  handleClick = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  render() {
    const { input } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen">{input}</div>
          <button className="button" onClick={this.handleClick}>
            AC
          </button>
          <button className="button" onClick={this.handleClick}>
            %
          </button>
          <button className="button" onClick={this.handleClick}>
            &#177;
          </button>
          <button className="button" onClick={this.handleClick}>
            &#247;
          </button>
          <button className="button" value="7" onClick={this.handleClick}>
            7
          </button>
          <button className="button" value="8" onClick={this.handleClick}>
            8
          </button>
          <button className="button" value="9" onClick={this.handleClick}>
            9
          </button>
          <button className="button" onClick={this.handleClick}>
            X
          </button>
          <button className="button" value="4" onClick={this.handleClick}>
            4
          </button>
          <button className="button" value="5" onClick={this.handleClick}>
            5
          </button>
          <button className="button" value="6" onClick={this.handleClick}>
            6
          </button>
          <button className="button" value="1" onClick={this.handleClick}>
            1
          </button>
          <button className="button" value="2" onClick={this.handleClick}>
            2
          </button>
          <button className="button" value="3" onClick={this.handleClick}>
            3
          </button>
          <button className="button" onClick={this.handleClick}>
            -
          </button>
          <button className="button" value="0" onClick={this.handleClick}>
            0
          </button>
          <button className="button" onClick={this.handleClick}>
            .
          </button>
          <button className="button" onClick={this.handleClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
