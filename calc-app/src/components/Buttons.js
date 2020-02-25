import React from "react";

const Button = ({ numSign, Name, handleFun }) => {
  return (
    <button className={Name} id={numSign} onClick={handleFun} value={numSign}>
      {numSign}
    </button>
  );
};

export default Button;
