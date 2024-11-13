// app/product/[id]/page.js
import Image from 'next/image';
import  fetchProduct  from '../../action'; // Path to your fetch function

export default async function ProductPage({ params }) {
  const { id } = params; // Extract the product ID from the dynamic route

  try {
    const product = await fetchProduct(id);  // Fetch product by ID

    if (!product) {
      return <div>Product not found</div>;  // Handle case where product is not found
    }

    return (
      <div>
        <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
      />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  } catch (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }
}
