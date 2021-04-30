import React from "react";

class Buttons extends React.Component {
  render() {
    const { detectClick } = this.props;
    return (
      <div className="Buttons">
        <button
          name="1"
          className="number one"
          onClick={(e) => {
            detectClick(e.target);
          }}
        >
          1
        </button>
        <button
          name="2"
          className="number two"
          onClick={(e) => detectClick(e.target)}
        >
          2
        </button>
        <button
          name="3"
          className="numbern three"
          onClick={(e) => detectClick(e.target)}
        >
          3
        </button>
        <button
          name="4"
          className="number four"
          onClick={(e) => detectClick(e.target)}
        >
          4
        </button>
        <button
          name="5"
          className="number five"
          onClick={(e) => detectClick(e.target)}
        >
          5
        </button>
        <button
          name="6"
          className="number six"
          onClick={(e) => detectClick(e.target)}
        >
          6
        </button>
        <button
          name="7"
          className="number seven"
          onClick={(e) => detectClick(e.target)}
        >
          7
        </button>
        <button
          name="8"
          className="number eight"
          onClick={(e) => detectClick(e.target)}
        >
          8
        </button>
        <button
          name="9"
          className="number nine"
          onClick={(e) => detectClick(e.target)}
        >
          9
        </button>
        <button
          name="0"
          className="number zero"
          onClick={(e) => detectClick(e.target)}
        >
          0
        </button>
        <button
          name="+"
          className="operation"
          onClick={(e) => detectClick(e.target)}
        >
          +
        </button>
        <button
          name="-"
          className="operation"
          onClick={(e) => detectClick(e.target)}
        >
          -
        </button>
        <button
          name="*"
          className="operation"
          onClick={(e) => detectClick(e.target)}
        >
          *
        </button>
        <button
          name="/"
          className="operation"
          onClick={(e) => detectClick(e.target)}
        >
          /
        </button>
        <button name="=" onClick={(e) => detectClick(e.target)}>
          =
        </button>
        <button name="-/+" onClick={(e) => detectClick(e.target)}>
          -/+
        </button>
        <button name="CE" onClick={(e) => detectClick(e.target)}>
          CE
        </button>
        <button name="." onClick={(e) => detectClick(e.target)}>
          .
        </button>
        <button name="(" onClick={(e) => detectClick(e.target)}>
          (
        </button>
        <button name=")" onClick={(e) => detectClick(e.target)}>
          )
        </button>
      </div>
    );
  }
}

export default Buttons;
