export async function getServerSideProps({ params }) {
  const res = await fetch('https://fakestoreapi.com/products/' + params.productId);
  const product = await res.json();

  return { props: { product } };
}

export default function ProductPage({ product }) {
  return (
    <div className='p-8 max-w-lg'>
      <h3 className='font-bold'>{product.title}</h3>
      <p className='text-sm mb-10'>{product.description}</p>
      <img src={product.image} className='max-w-sm' alt='' />
    </div>
  );
}
