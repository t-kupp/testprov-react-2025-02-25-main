// 1. Udda och jämna tal i komponenter.
// Skapa en variabel count i state på denna komponent.
// Lägg till en knapp som ökar värdet i count.
// Rendera två barn-komponenter beroende på om talet är jämnt eller udda.
// Om talet är udda ska komponenten Odd visa talet med blå färg.
// Om talet är jämnt ska komponenten Even visa talet med röd färg.

import { useState } from 'react';

// 1. Odd and even numbers in components.
// Create a variable count in state on this component.
// Add a button that increments the value in count.
// Render two child components depending on whether the number is even or odd.
// If the number is odd, the Odd component should display the number in blue color.
// If the number is even, the Even component should display the number in red color.

export default function Question1() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }

  return (
    <div>
      <h1>Question 1</h1>
      <div className='flex gap-4 items-center'>
        <button className='px-2 py-1 border rounded hover:bg-slate-200' onClick={decrement}>
          -1
        </button>
        {value % 2 === 0 ? <p className='text-red-500'>{value}</p> : <p className='text-blue-500'>{value}</p>}
        <button className='px-2 py-1 border rounded hover:bg-slate-200' onClick={increment}>
          +1
        </button>
      </div>
    </div>
  );
}
