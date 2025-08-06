import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Function to fetch products from the API
const retriveProduct = async ({queryKey}) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}/${queryKey[1]}`);
  return response.data;
}

export default function ProductDetails({id}) {

  const {data:product,error,isLoading} =useQuery({
    queryKey:["products",id],
    queryFn:retriveProduct,
  })

if(isLoading) return <div> Fetching Products Details ...</div>
if(error) return <div>An error occurred: {error.message}</div>
  return (
    <div className='w-1/5'>
      <h1 className='text-3xl my-2 text-center'>Product Details</h1>

      <div className='border bg-gray-100 p-1 text-md rounded-md flex flex-col'>
        <img
        className='object-cover w-24 h-24 rounded-full border m-auto'
        src={product.thumbnail} 
      alt={product.title}
      />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      </div>


    </div>
  )
}
