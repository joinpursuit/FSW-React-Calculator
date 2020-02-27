import React from "react";
import "../css/Input.css";

const Input = props => {
  return <div className={"input"}>{props.displayValue}</div>;
};

export default Input;
