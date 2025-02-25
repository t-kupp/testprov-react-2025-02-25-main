// 6. Produktlista med detaljsida
// Visa en lista över produkter från apiet:
// https://fakestoreapi.com/products
// I listan visas title och description för varje produkt.
// Om man klickar på en produkt visas en detaljsida för produkten.
// Där kan man se title, description och image för produkten.

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    setProducts(data);
  }

  return (
    <ul className='max-w-lg'>
      {products.map((product) => (
        <Link key={product.id} href={'/products/' + product.id}>
          <li className='border p-4 m-4 rounded hover:bg-slate-200'>
            <h3 className='font-bold'>{product.title}</h3>
            <p className='text-sm'>{product.description}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
