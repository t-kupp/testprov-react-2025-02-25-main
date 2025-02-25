import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  }

  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
}
