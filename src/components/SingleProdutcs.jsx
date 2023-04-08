import React from "react";
import { toast } from "react-hot-toast";
import { addToDb } from "../utilities/utilities";

const addToCart = (id) => {
  toast(`add to cart ${id}`);
  addToDb(id);
};

const SingleProdutcs = ({ product }) => {
  // console.log(product);
  const { id, price, picture, name, category } = product;
  return (
    <div className="bg-cyan-50 p-8 shadow-lg">
      <img className="rounded-md shadow-md" src={picture} alt={name} />
      <p className="text-xl font-bold my-4">{name}</p>
      <p className="mt-3">Category:{category}</p>
      <p className="text-xl font-bold">Price:{price}</p>
      <div className="flex justify-center">
        <button
          onClick={() => addToCart(id)}
          className="border w-4/5 mt-6 font-semibold hover:bg-cyan-500 transition duration-300 ease-in  px-4 py-2  bg-cyan-200 rounded-full  "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProdutcs;
