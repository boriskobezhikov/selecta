import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

const useTheme = () => {
    const theme = useContext(ThemeContext)

    
    function toggleTheme() {
        if (theme.theme === 'white') {
            theme.setTheme('black');
        }
        else {
            theme.setTheme('white');
        }
        document.body.style.backgroundColor = `${(theme.theme === 'white' ? 'black' : 'white')}`;
    }

  const themeProps = {
    color: theme.theme,
    oppColor: theme.theme === 'white' ? 'black' : 'white',
    onClick: toggleTheme
  };

  return themeProps;
}

export default useTheme;
