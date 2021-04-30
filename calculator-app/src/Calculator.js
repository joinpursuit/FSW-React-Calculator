import React from "react";


// addFruit = (fruit) => {
  //   const newFruit = {id: uuid++, type: fruit}
  //   this.setState((prevState) => ({
    //     cart: [...prevState.cart, newFruit],
    //   }));
    // };
    
    /* <button onClick={() => this.addFruit("orange")} value={"orange"}>orange</button> */

    class Calculator extends React.Component {
  state = { count: "", one: "", two: "", three: "" };

  handleClick(e) {
    this.setState({ count: e });
    // this.setState((prevState) => {
      // const { displayValue } = this.state;
    //   return { count: prevState.count + value };
    // });
    console.log(e);
  }

  render() {
    const { count } = this.state;
    return (
      <section>
        <p id="display">{count}</p>
        <button onClick={() => this.handleClick(1)} value={"1"}>
          1
        </button>
        <button onClick={() => this.handleClick(2)} value={"2"}>
          2
        </button>
        <button onClick={() => this.handleClick(3)} value="3">
          3
        </button>
        <button onClick={() => this.handleClick(4)} value="4"
         
        >
          4
        </button>
        {/* <button
          name={displayValue}
          onClick={this.handleClick}
          value="5"
         
        >
          5
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="6"
         
        >
          6
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="7"
         
        >
          7
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="8"
         
        >
          8
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="9"
         
        >
          9
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="0"
         
        >
          0
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="+"
         
        >
          +
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="-"
         
        >
          -
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="÷"
         
        >
          ÷
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="="
         
        >
          =
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="x"
          type="submit"
        >
          x
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="%"
          type="submit"
        >
          %
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="."
          type="submit"
        >
          .
        </button>
        <button name={displayValue} onClick={this.handleClick} type="submit">
          AC
        </button>
        <button
          name={displayValue}
          onClick={this.handleClick}
          value="+"
          type="submit"
        >
          +/-
        </button> */}
      </section>
    );
  }
}

export default Calculator;
