// 4. Hämta användare
// Hämta användare från: https://jsonplaceholder.typicode.com/users
// Spara användarna i context.
// Skapa en länk till sidan /users och visa listan med användare där.
// för varje användare ska `name`och `email` visas.

import { UserContext } from '@/context/UserContext';
import Link from 'next/link';
import { useEffect, useContext } from 'react';

export default function Question4() {
  const { setUsers } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  }
  return (
    <div>
      <h1>Question 4</h1>
      <Link className='border px-2 py-1 rounded hover:bg-slate-200' href={'/users'}>
        Users
      </Link>
    </div>
  );
}
