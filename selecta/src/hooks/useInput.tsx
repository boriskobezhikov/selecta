import React, { useState } from "react";

const useInput = (text: string) => {
  const [value, setValue] = useState(text);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}

export default useInput;
