import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Function to fetch products from the API
const retriveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=4`
  );
  return response.data;
};

export default function ProductsList({ onProductClick }) {
  const [page, setPage] = useState(1);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retriveProducts,
  });

  if (isLoading) return <div>Fetching Products ...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center w-4/5 items-center">
      <h2 className="text-3xl my-2">Products List</h2>

      <ul className="flex flex-wrap justify-center items-center">
        {products.data &&
          products.data.map((product) => (
            <li
              className="flex flex-col items-center m-2 border rounded-sm"
              key={product.id}
            >
              <img
                className="object-cover w-96 h-64 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
              <button onClick={() => onProductClick(product.id)}>
                Click Details
              </button>
            </li>
          ))}
      </ul>

        <div className='flex'>
          {
            products.prev && (
              <button
                className='p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm'
                onClick={() => setPage(products.prev)} > Prev </button>
            )
          }
          {
            products.next && (
              <button
                className='p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm'
                onClick={() => setPage(products.next)} > Next </button>
            )
          }

        </div>
    </div>
  );
}
