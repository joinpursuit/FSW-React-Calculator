import React from "react";

const Button = ({ numSign, Name, handleFun }) => {
  return (
    <button
      className={Name}
      name={numSign}
      id={"id" + numSign}
      onClick={handleFun}
      value={numSign}
    >
      {numSign}
    </button>
  );
};

export default Button;
