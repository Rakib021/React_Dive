import axios from "axios";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
export const AddProduct = () => {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: "",
    rating: 5,
    thumbnail: "",
  });

const mutation =useMutation({
  mutationFn:(newProduct) => {
    return axios.post("http://localhost:3000/products", newProduct);
  },

  onSuccess: (data,variables,context) => {
    // Invalidate and refetch
    console.log(context)
    queryClient.invalidateQueries({ queryKey: ["products"] });
  },
  onMutate: (variables) => {
    // Optionally, you can perform optimistic updates here
return {greeting: "Hello from onMutate"};
  },
  onError: (error) => {
    console.error("Error adding product:", error);
  },
})




  const handleSubmitData = (e) => {
    
    e.preventDefault();
    const newData = {...state,id: crypto.randomUUID().toString()};
    mutation.mutate(newData)
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;

    setState({
      ...state,
      [name]: value,
    });

  };

if(mutation.isLoading) return <div>Adding Product ...</div>;
if(mutation.isError) return <div>An error occurred: {mutation.error.message}</div>;
if(mutation.isSuccess) return <div>Product added successfully!</div>;

  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2 text-center">Add a Product</h2>

      <form className="flex flex-col" onSubmit={handleSubmitData}>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          className="my-2 border p-1 rounded-md"
          placeholder="Enter a product name"
        />
        <textarea
          name="description"
          value={state.description}
          onChange={handleChange}
          className="my-2 border p-1 rounded-md"
          placeholder="Enter a product description"
        ></textarea>

        <input
          type="number"
          value={state.price}
          name="price"
          onChange={handleChange}
          className="my-2 border p-1 rounded-md"
          placeholder="Enter a product price"
        />

        <input
          type="text"
          value={state.thumbnail}
          name="thumbnail"
          onChange={handleChange}
          className="my-2 border p-1 rounded-md"
          placeholder="Enter a product thumbnail URL"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};
