import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';

interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

interface IAuthContext {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}


export const ThemeContext = createContext<IThemeContext>({theme: '',setTheme: ()=> {}});
export const AuthContext = createContext<IAuthContext>({auth: false, setAuth: () => {}});
function App() {
  const [theme, setTheme] = useState("white");
  const [auth, setAuth] = useState(false);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <AuthContext.Provider value={{auth,setAuth}}>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login />}></Route>
      </Route>
    </Routes>
    </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
