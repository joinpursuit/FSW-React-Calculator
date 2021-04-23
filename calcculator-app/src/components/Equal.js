import React from "react";
import "./styles/Equal.css"

const Equal = ({ first, second, mod, handleEqual }) => {//could not loop the props back to the parent when invoking handleEqual function, so made a copy of info to pass in as arguments which looped the necesary information.
  
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
