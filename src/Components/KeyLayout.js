import React from "react";
import Button from "./Button";

const KeyLayout = (props) => {
  const {
    addToText,
    clearText,
    calculateResult,
    calculatePercentage,
    calculateNegativity,
  } = props;

  const lightGray = "#D4D4D2";
  const eerieBlack = "#1C1C1C";
  const vividGamboge = "#FF9500";
  return (
    <>
      <div className="row">
        <Button
          icon="AC"
          handleClick={clearText}
          bcolor={lightGray}
          tcolor={eerieBlack}
        />
        <Button
          icon="+/-"
          handleClick={calculateNegativity}
          bcolor={lightGray}
          tcolor={eerieBlack}
        />
        <Button
          icon="%"
          handleClick={calculatePercentage}
          bcolor={lightGray}
          tcolor={eerieBlack}
        />
        <Button icon="/" handleClick={addToText} bcolor={vividGamboge} />
      </div>
      <div className="row">
        <Button icon="7" handleClick={addToText} />
        <Button icon="8" handleClick={addToText} />
        <Button icon="9" handleClick={addToText} />
        <Button icon="*" handleClick={addToText} bcolor={vividGamboge} />
      </div>
      <div className="row">
        <Button icon="4" handleClick={addToText} />
        <Button icon="5" handleClick={addToText} />
        <Button icon="6" handleClick={addToText} />
        <Button icon="-" handleClick={addToText} bcolor={vividGamboge} />
      </div>
      <div className="row">
        <Button icon="1" handleClick={addToText} />
        <Button icon="2" handleClick={addToText} />
        <Button icon="3" handleClick={addToText} />
        <Button icon="+" handleClick={addToText} bcolor={vividGamboge} />
      </div>
      <div className="row">
        <Button icon="0" handleClick={addToText} />
        <Button icon="." handleClick={addToText} />
        <Button icon="=" handleClick={calculateResult} bcolor={vividGamboge} />
      </div>
    </>
  );
};

export default KeyLayout;
