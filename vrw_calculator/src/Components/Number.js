import React from "react";
// import numberData from "../Data/numberData";
// import Numbers from "./Numbers";

const Number = ({ num }) => {
  // const { character } = numValues;
  console.log({ num });
  return (
    <li>
      <p>{num.character}</p>
    </li>
  );
};

export default Number;
