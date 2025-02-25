// 5 Context och dark mode
// Lagra ett tema ("light" eller "dark") i context.
// Skapa en knapp i en separat komponent som gör
// att temat kan bytas mellan ljus och mörk.
// Använd useContext för att läsa och uppdatera temat.
// Byt bakgrundsfärg på denna sida beroende på tema.
// Hela sidan ska vara svart om temat är dark och vit om temat är light.

import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export default function Question5() {
  const { useDarkMode } = useContext(ThemeContext);
  console.log('useDarkMode:', useDarkMode);

  return (
    <div className={useDarkMode ? 'bg-black h-screen' : 'bg-white h-screen'}>
      <h1 className={useDarkMode ? 'text-white' : 'text-black'}>Question 5</h1>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button className='px-2 py-1 border bg-white text-black hover:bg-slate-200' onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
