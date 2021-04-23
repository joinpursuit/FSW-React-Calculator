import React from "react";
import "./styles/Equal.css"

const Equal = ({ first, second, mod, handleEqual }) => {
  const finalEqual = {
    first: first,
    mod: mod,
    second: second,
  };

  return (
    <div>
      <button className="equal" onClick={() => handleEqual(finalEqual)}>EQUAL</button>
    </div>
  );
};
export default Equal;
