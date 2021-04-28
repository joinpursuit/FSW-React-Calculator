import { Component } from "react";

class Keys extends Component {
        state = {display: ""}


  input = (e) => {
      this.setState((prevState) => ({display: (prevState.display + e.target.name)}))
  }

  sign = (e) => {
      const { name } = e.target
      const { display } = this.state
      if(name === "+/-"){
          this.setState({display: display * -1})
      }
  }

  render() {
      const { display } = this.state
    return (
      <section className="container">
          <main>
              {display}
          </main>

          <div className="row-one">
          <button onClick={this.input}>AC</button>
          <button onClick={this.sign} name="+/-">+/-</button>
          <button onClick={this.input} name="%">%</button>
          <button onClick={this.input} name="/">/</button>
          </div>
        <div className="row-two">
          <button onClick={this.input} name="7">7</button>
          <button onClick={this.input} name="8" >8</button>
          <button onClick={this.input} name="9">9</button>
          <button onClick={this.input} name="x">x</button>
        </div>

        <div className="row-three">
          <button onClick={this.input} name="4">4</button>
          <button onClick={this.input} name="5">5</button>
          <button onClick={this.input} name="6">6</button>
          <button onClick={this.input} name="-">-</button>
        </div>
        <div className="row-four">
          <button onClick={this.input} name="1">1</button>
          <button onClick={this.input} name="2">2</button>
          <button onClick={this.input} name="3">3</button>
          <button onClick={this.input} name="+">+</button>
        </div>

        <div className="row-five">
          <button onClick={this.input} name="0">0</button>
          <button onClick={this.input} name=".">.</button>
          <button onClick={this.input} name="=">=</button>
        </div>
      </section>
    );
  }
}

export default Keys;
