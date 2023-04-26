import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

export const ThemeContext = createContext({theme:"light", toggleTheme});

function App() {
  const [theme, toggleTheme] = useState("default value");

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
