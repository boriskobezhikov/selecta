import React, { useState } from "react";

const useInput = (text: string) => {
  const [value, setValue] = useState(text);
  const [valid, setValid] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    
    switch(e.target.type) {
      case 'text': 
        if (e.target.value.trim() ! == '') setValid(false);
        else setValid(true);
        break;
      case 'password':
        if (e.target.value.length >= 6 && value.trim() != '') setValid(true);
        else setValid(false);
        break;
      case 'email':
        if (e.target.value.includes('@')) setValid(true)
        else setValid(false);
        break;
      default:
        setValid(false);
    }
  }

  const inputProps = {
    value: value,
    validation: valid,
    onChange: handleChange
  };

  return inputProps;
}

export default useInput;
