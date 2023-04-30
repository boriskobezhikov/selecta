import React, { useContext, useState } from "react";
import { TypeContext } from "../routes/Login";

const useLogType = () => {
    const type = useContext(TypeContext);
    
    const toggleAuth = () => {
        if (type.type == 'login') 
            type.setType('register');
        else 
            type.setType('login');
    }


  const TypeProps = {
    type: type,
    onClick: toggleAuth
  };

  return TypeProps;
}

export default useLogType;
