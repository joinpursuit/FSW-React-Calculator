import React from "react";

const KeypadIndex = ({ result }) => {
  return (
    <section className="result">
      <p>{result || 0}</p>
    </section>
  );
};

export default KeypadIndex;
