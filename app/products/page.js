// app/products/page.js


import { fetchProducts } from '../action'; // Your server-side function to fetch data
import { ProductsList } from './ProductList';

export default async function ProductsPage() {
  const products = await fetchProducts(); // Fetch the products server-side
  
  return (
    <div>
      <h1>Our Products</h1>
      <ProductsList products={products} /> {/* Pass products as props */}
    </div>
  );
}
