import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [useDarkMode, setUseDarkMode] = useState(false);

  function toggleTheme() {
    setUseDarkMode(!useDarkMode);
  }

  return <ThemeContext.Provider value={{ toggleTheme, useDarkMode }}>{children}</ThemeContext.Provider>;
}
