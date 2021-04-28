import { Component } from "react";

class Keys extends Component {
    constructor(props){
        super(props)
        this.state = {display: ""}
    }

  input = () => {
         
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
          <button onClick={this.input}>+/-</button>
          <button onClick={this.input}>/</button>
          <button onClick={this.input}>x</button>
          </div>
        <div className="row-two">
          <button onClick={this.input}>7</button>
          <button onClick={this.input}>8</button>
          <button onClick={this.input}>9</button>
          <button onClick={this.input}>x</button>
        </div>

        <div className="row-three">
          <button onClick={this.input}>4</button>
          <button onClick={this.input}>5</button>
          <button onClick={this.input}>6</button>
          <button onClick={this.input}>-</button>
        </div>
        <div className="row-four">
          <button onClick={this.input}>1</button>
          <button onClick={this.input}>2</button>
          <button onClick={this.input}>3</button>
          <button onClick={this.input}>+</button>
        </div>

        <div className="row-five">
          <button onClick={this.input}>0</button>
          <button onClick={this.input}>.</button>
          <button onClick={this.input}>=</button>
        </div>
      </section>
    );
  }
}

export default Keys;
