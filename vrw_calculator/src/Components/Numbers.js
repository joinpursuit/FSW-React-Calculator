import React from "react";
import Number from "./Number";
import numberData from "../Data/numberData";

const Numbers = () => {
  const numbers = numberData.map((num) => {
    // debugger
    return <Number key={num.id} num={num} />;
  });

  return (
    <section className="characters">
      <ul>{numbers}</ul>
    </section>
  );
};

export default Numbers;
