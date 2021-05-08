import React from "react";
import "../styles/display.css"

const Display = ({ display }) => {
    return (
      <section className="outputDisplay">
          {display}
      </section>
    );
  }

export default Display;
