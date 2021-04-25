import React from "react";

const Display = ({ numbers }) => {
    return (
      <section className="outputDisplay">
        <input type="text" value={numbers} readOnly></input>
      </section>
    );
  }

export default Display;
