//function - just displaying the total, updating the effects of numbers & operators

import React from "react";

const Display = ({ inputValue, toggleDisplay, functionEntered, elementOne }) => {
  console.log(`input= ${inputValue}, toggle= ${toggleDisplay}, function= ${functionEntered}, el1= ${elementOne}`);
//   let totalDisplay = 0;
  
//   if ({ elementOne } > 0 && { functionEntered } > 0 && !{ inputValue } ) {
//     totalDisplay += { elementOne };
//   } 

  return (
    <div className="display">
      <h3>{(elementOne > 0 && toggleDisplay && functionEntered) ? <p>{Math.round(elementOne)}</p> : <p>{Math.round(inputValue)}</p> }</h3>
    </div>
  );
};

export default Display;


// else {
//     totalDisplay += { inputValue };
//   }