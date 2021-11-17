import React from "react";
import "./App.css";
import Banana from "./Components/video/banana.mp4";
import Intro from "./Components/audio/Intro.mp3";
import Outro from "./Components/audio/Outro.mp3";

class App extends React.Component {
  state = {
    input: "",
    previousNum: "",
    operator: "",
    banana: "off",
    track: "",
    calculated: "no",
  };

  clicky = (el) => {
    if (this.state.calculated === "no"){
    this.setState({ input: this.state.input + el.target.value });
  } else {
    this.setState({input: el.target.value,
                  calculated: "no",})
  }
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
        calculated: "yes",
        previousNum: 0,
      });
    } else if (this.state.operator === "minus") {
      this.setState({
        input: Number(this.state.previousNum) - Number(this.state.input),
        calculated: "yes",
        previousNum: 0,
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input: Number(this.state.previousNum) * Number(this.state.input),
        calculated: "yes",
        previousNum: 0,
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input: Number(this.state.previousNum) / Number(this.state.input),
        calculated: "yes",
        previousNum: 0,
      });
    }
  };

  banana = () => {
    let bg = document.getElementById("banana");
    let sg = document.getElementById("song");
    if (bg.style.display === "block") {
      this.setState({
        banana: "off",
        play: "on",
      });
      bg.style.display = "none";
      sg.autoPlay = false;
      sg.muted = true;
      return ( console.log("🍌"),
        <div id="banana" style={{
            display: "none",
          }}>
        </div>
      );

    } else if (bg.style.display === "none") {
      this.setState({
        banana: "on",
        play: "on",
      });
      bg.style.display = "block";
      const flip = (max, min) => {
        let x = Math.floor(Math.random() * (max - min + 1) );
        if (x <= 3  && this.state.banana !== "on") {
            sg.currentTime = 0;
            sg.muted = false;
          this.setState({ track: Intro });
        } else if (x > 3 && this.state.banana !== "on"){
            sg.currentTime = 0;
            sg.muted = false;
          this.setState({ track: Outro });
        }
      };
      flip(6, 1);

      return ( console.log("🍌🍌"),
        <div id="banana" style={{
            display: "block",
          }}>
        </div>
      );
    }
  };
  render() {
    const { input } = this.state;
    const { previousNum} = this.state;
    return (
      <>
          <div id="banana" style={{
              display: "none",
            }} ><video
            autoPlay
            loop
            muted
            style={{
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
          <audio src={this.state.track} id="song" muted={true} autoPlay ={true} loop/>
          </div>
        <div className="calculator">
          <div className="container">
            <div id="track" />
            <section id="display">
              {/* <div className="displaySmall">
              ({new Intl.NumberFormat().format(previousNum)}
                </div> */}
              <div className="display">
                {new Intl.NumberFormat().format(input)}
              </div>
            </section>

            <section id="btn-container">
              <div className="row1" id="disco">
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

              <div className="row2" id="disco">
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

              <div className="row3" id="disco">
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

              <div className="row4" id="disco">
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

              <div className="row5" id="disco">
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
