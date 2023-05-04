import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Search from './routes/Search';
import Album from './routes/Album';

interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

interface IAuthContext {
  auth: boolean;
  key: string;
  setKey: Dispatch<SetStateAction<string>>;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<IThemeContext>({theme: '',setTheme: ()=> {}});
export const AuthContext = createContext<IAuthContext>({auth: false,key: '', setKey: () => {} ,setAuth: () => {}});

function App() {
  
  const [theme, setTheme] = useState("white");
  const [auth, setAuth] = useState(false);
  const [key, setKey] = useState('');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <AuthContext.Provider value={{auth,key,setKey,setAuth}}>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/search/:type/:value' element={<Search />}/>
        <Route path='/album/:id' element= {<Album />}/>
      </Route>
    </Routes>
    </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
