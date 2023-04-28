import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';

interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({theme: '',setTheme: ()=> {}});

function App() {
  const [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Route>
    </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
