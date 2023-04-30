import React, { useState } from "react";

const useInput = (text: string) => {
  const [value, setValue] = useState(text);
  const [valid, setValid] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setValid(false);
    switch(e.target.type) {
      case 'text': 
        if (value.trim() != '') setValid(true);
        else setValid(false);
        break;
      case 'password':
        if (value.trim().length >= 6 && value.trim() != '') setValid(true);
        else setValid(false);
        break;
      case 'email':
        if (value.trim().includes('@')) setValid(true)
        else setValid(false);
        break;
      default:
        setValid(false);
    }
    console.log(e.target.type)
  }

  const inputProps = {
    value: value,
    validation: valid,
    onChange: handleChange
  };

  return inputProps;
}

export default useInput;
