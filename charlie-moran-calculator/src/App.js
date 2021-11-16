import React from "react";
import "./App.css";
import Banana from "./Components/video/banana.mp4";
import Intro from "./Components/audio/intro.mp3";
import Outro from "./Components/audio/outro.mp3";

class App extends React.Component {
  state = {
    input: "",
    previousNum: "",
    operator: "",
    banana: "off",
    track: "",
    play: "off",
  };

  clicky = (el) => {
    this.setState({ input: this.state.input + el.target.value });
  };

  clickClear = () => {
    this.setState({ input: "" });
  };

  clickNeg = () => {
    this.setState({ input: Number(this.state.input) * -1 });
  };

  clickZero = () => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + 0 });
    }
  };

  clickDec = () => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + "." });
    }
  };

  clickAdd = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "plus",
    });
  };

  clickSubt = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "minus",
    });
  };

  clickMultiply = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "multiply",
    });
  };

  clickDivide = () => {
    this.setState({
      previousNum: this.state.input,
      input: "",
      operator: "divide",
    });
  };

  clickCalc = () => {
    if (this.state.input === "") {
      this.setState({
        input: "",
        previousNum: "",
        operator: "",
      });
    } else if (this.state.operator === "plus") {
      this.setState({
        input: Number(this.state.previousNum) + Number(this.state.input),
      });
    } else if (this.state.operator === "minus") {
      this.setState({
        input: Number(this.state.previousNum) - Number(this.state.input),
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input: Number(this.state.previousNum) * Number(this.state.input),
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input: Number(this.state.previousNum) / Number(this.state.input),
      });
    }
  };

//   music = () => {
//     new Audio(this.track).play();
//   };

  banana = () => {
    var bg = document.getElementById("banana");
    if (bg.style.display === "block") {
      this.setState({
        banana: "off",
        play: "on",
        track: "",
      });
      return ( console.log("🍌"),
        <div id="banana">
          <video
            autoplay
            loop
            muted
            style={{
              display: "none",
            }}
          >
            <source src={Banana} type="video/mp4" />
          </video>
        </div>
      );

    } else if (bg.style.display === "none") {
      this.setState({
        banana: "on",
        play: "on",
      });
      const flip = () => {
        let x = Math.floor(Math.random() * 2 === 0);
        if (x < 2) {
          this.setState({ track: "intro" });
          new Audio(Intro).play();
        } else {
          this.setState({ track: "outro" });
          new Audio(Outro).play();
        }
      };
      flip();

      return ( console.log("🍌2"),
        <div id="banana">
          <video
            autoplay
            loop
            muted
            style={{
            display:"block",
              position: "absolute",
              width: "100%",
              left: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%",
              zIndex: "-1",
            }}
          >
            <source src={Banana} type="video/mp4" />
          </video>
        </div>
      );
    }
  };
  render() {
    const { input } = this.state;
    return (
      <>
          <div id="banana" ></div>
        <div className="calculator">
          <div className="container">
            <div id="track" />
            <section id="display">
              <div className="display">
                {new Intl.NumberFormat().format(input)}
              </div>
            </section>

            <section id="btn-container">
              <div className="row1">
                <button onClick={this.clickClear} className="clear">
                  AC
                </button>
                <button onClick={this.clickNeg} className="neg">
                  +/-
                </button>
                <button onClick={this.banana} className="banana" >
                  🍌
                </button>
                <button onClick={this.clickDivide} className="operator" >
                  /
                </button>
              </div>

              <div className="row2">
                <button onClick={this.clicky} value="7">
                  7
                </button>
                <button onClick={this.clicky} value="8">
                  8
                </button>
                <button onClick={this.clicky} value="9">
                  9
                </button>
                <button onClick={this.clickMultiply} className="operator">
                  x
                </button>
              </div>

              <div className="row3">
                <button onClick={this.clicky} value="4">
                  4
                </button>
                <button onClick={this.clicky} value="5">
                  5
                </button>
                <button onClick={this.clicky} value="6">
                  6
                </button>
                <button onClick={this.clickSubt} className="operator">
                  -
                </button>
              </div>

              <div className="row4">
                <button onClick={this.clicky} value="1">
                  1
                </button>
                <button onClick={this.clicky} value="2">
                  2
                </button>
                <button onClick={this.clicky} value="3">
                  3
                </button>
                <button onClick={this.clickAdd} className="operator">
                  +
                </button>
              </div>

              <div className="row5">
                <button onClick={this.clicky} value="0">
                  0
                </button>
                <button onClick={this.clickDec}>.</button>
                <button onClick={this.clicky} value="00">
                  00
                </button>
                <button className="operator" onClick={this.clickCalc}>
                  =
                </button>
              </div>
              <footer className="copyright">
                <small className="copyright">
                  React-Banana-Calculator-App &copy; Copyright 2021, Charlie
                  Moran
                </small>
              </footer>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default App;
