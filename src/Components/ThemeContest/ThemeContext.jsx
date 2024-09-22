import React, { createContext, useContext, useState } from 'react'
import { colorsLight, colorsDark} from './Color';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
const ThemeProvider = ({children}) => {
    const root = document.documentElement;
    const themes = {
      0:colorsLight,
      1:colorsDark
    }
  const [theme, setTheme] = useState(0);
    const setThemeContext = (val)=>{
      console.log(val)
      setTheme(val)
    }
  Object.entries(themes[theme])?.forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  return (
    <ThemeContext.Provider value={{theme, setThemeContext}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider