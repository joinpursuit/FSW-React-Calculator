import { Component } from "react";
import "./Button.css";

class Keys extends Component {
  
  render() {
    const { value, inputInteger, inputDot, clear, turnNegative, percentage, operation } = this.props;

    return (
      <section className="buttons">
        <button className="function" onClick={() => clear()}>AC </button>
        <button className="function" onClick={() => turnNegative()}>±</button>
        <button className="function" onClick={() => percentage()}>%</button>
        <button className="operator" onClick={() => operation("/")}>÷</button>
        <button className="integer" onClick={() => inputInteger(7)}>7</button>
        <button className="integer" onClick={() => inputInteger(8)}>8</button>
        <button className="integer" onClick={() => inputInteger(9)}>9</button>
        <button className="operator"onClick={() => operation("*")}>x</button>
        <button className="integer" onClick={() => inputInteger(4)}>4</button>
        <button className="integer" onClick={() => inputInteger(5)}>5</button>
        <button className="integer" onClick={() => inputInteger(6)}>6</button>
        <button className="operator"onClick={() => operation("-")}>−</button>
        <button className="integer" onClick={() => inputInteger(1)}>1</button>
        <button className="integer" onClick={() => inputInteger(2)}>2</button>
        <button className="integer" onClick={() => inputInteger(3)}>3</button>
        <button className="operator" onClick={() => operation("+")}>+</button>
        <button className="integer" onClick={() => inputInteger(0)}>0</button>
        <button className="integer" onClick={() => inputDot()}>.</button>
        <button className="operator" onClick={() => operation("=")}>=</button>

        {/* <button value="C" onClick={(e) => onClick(e.target.value)}>
          C
        </button>
        <button value="*(-1)" onClick={(e) => onClick(e.target.value)}>
          +/-
        </button>
        <button value="%" onClick={(e) => onClick(e.target.value)}>
          %
        </button>
        <button value="/" onClick={(e) => onClick(e.target.value)}>
          ÷
        </button>
        <br />

        <button value="7" onClick={(e) => onClick(e.target.value)}>
          7
        </button>
        <button value="8" onClick={(e) => onClick(e.target.value)}>
          8
        </button>
        <button value="9" onClick={(e) => onClick(e.target.value)}>
          9
        </button>
        <button value="*" onClick={(e) => onClick(e.target.value)}>
          x
        </button>
        <br />

        <button value="4" onClick={(e) => onClick(e.target.value)}>
          4
        </button>
        <button value="5" onClick={(e) => onClick(e.target.value)}>
          5
        </button>
        <button value="6" onClick={(e) => onClick(e.target.value)}>
          6
        </button>
        <button value="-" onClick={(e) => onClick(e.target.value)}>
          -
        </button>
        <br />

        <button value="1" onClick={(e) => onClick(e.target.value)}>
          1
        </button>
        <button value="2" onClick={(e) => onClick(e.target.value)}>
          2
        </button>
        <button value="3" onClick={(e) => onClick(e.target.value)}>
          3
        </button>
        <button value="+" onClick={(e) => onClick(e.target.value)}>
          +
        </button>
        <br />

        <button value="0" onClick={(e) => onClick(e.target.value)}>
          0
        </button>
        <button value="." onClick={(e) => onClick(e.target.value)}>
          .
        </button>
        <button value="CE" onClick={(e) => onClick(e.target.value)}>
          CE
        </button>
        <button value="=" onClick={(e) => onClick(e.target.value)}>
          =
        </button> */}
      </section>
    );
  }
}

export default Keys;
