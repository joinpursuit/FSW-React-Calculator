import { useState } from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

const useToggleShow = initialValue => {
  const [showInsert, setShowInsert] = useState(initialValue);
  const showInsertForm = () => {
    if (showInsert) {
      setShowInsert(false);
    } else {
      setShowInsert(true);
    }
  };
  return { showInsert, onClick: showInsertForm };
};

export { useInput, useToggleShow };