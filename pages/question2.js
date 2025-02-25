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
  const [showIndex, setShowIndex] = useState(0);

  function handleClick() {
    setShowIndex(showIndex + 1);
  }

  return (
    <div>
      <h1>Question 2</h1>
      <User users={users} handleClick={handleClick} showIndex={showIndex} />
    </div>
  );
}

function User({ users, handleClick, showIndex }) {
  return (
    <div>
      {users[showIndex]}
      <div className='flex'>
        {showIndex != users.length - 1 && (
          <button className='px-2 py-1 border rounded hover:bg-slate-200' onClick={handleClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
