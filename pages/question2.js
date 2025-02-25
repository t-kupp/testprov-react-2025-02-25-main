// 2. Byt plats med callback funktion
// Visa listan med namn genom att rendera en komponent User för varje namn.
// Komponenten User ska ha en knapp brevid namnet där det står "flytta fram"
// När man klickar på knappen ska namnet byta plats med namnet framför i listan.
// Det sista namnet i listan ska inte ha en knapp.

// 2. Change location with callback function
// Display the list of names by rendering a User component for each name.
// The User component should have a button next to the name that says "move forward"
// When the button is clicked, the name should change places with the name in front of the list.
// The last name in the list should not have a button.

import { useState } from 'react';

export default function Question2() {
  const [users, setUsers] = useState(['Fred', 'Sven', 'Anna', 'Per']);

  function handleClick(i) {
    let data = [...users];
    [data[i], data[i + 1]] = [data[i + 1], data[i]];
    setUsers(data);
  }

  return (
    <div className='p-8'>
      <h1>Question 2</h1>
      {users.map((user, index) => (
        <User key={index} index={index} name={user} handleClick={handleClick} usersLength={users.length} />
      ))}
    </div>
  );
}

function User({ name, handleClick, usersLength, index }) {
  return (
    <div className='flex items-center gap-2 p-1'>
      <p className='w-12'>{name}</p>
      {index < usersLength - 1 && (
        <button className='border rounded px-2 py-1 hover:bg-slate-200' onClick={() => handleClick(index)}>
          Move forward
        </button>
      )}
    </div>
  );
}
