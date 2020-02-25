import React from "react";

class ButtonPad extends React.Component {
  state = {
    num: "",
    prevValue: "",
    operation: ""
  };

  render() {
    return (
      <div className="buttons">
        <div>
          <input
            className="inputs"
            type="button"
            value=""
            onClick={this.props.handleChange}
            name="AC"
            id="AC"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="9"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="8"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="7"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="+"
            onClick={this.props.handleChange}
            name="operation"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="6"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="5"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="4"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="3"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="2"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
        <div>
          <input
            className="inputs"
            type="button"
            value="1"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>

        <div>
          <input
            className="inputs"
            type="button"
            value="0"
            onClick={this.props.handleChange}
            name="num"
          ></input>
        </div>
      </div>
    );
  }
}

export default ButtonPad;
