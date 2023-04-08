import React from "react";
import { HiTrash } from "react-icons/hi";

const ShowCartItem = ({ item }) => {
  console.log(item);
  const { id, price, picture, name, category, quantity } = item;
    
  return (
    <>
      <div className="flex justify-between w-full px-4 my-5">
        <img className="w-32" src={picture} alt="" />
        <div className="flex flex-col ">
          <p>{name}</p>
          <p>Quantity:{quantity}</p>

          <div className="mt-auto flex items-center mb-4 cursor-pointer">
            <HiTrash></HiTrash>
            <button className="">Remove</button>
          </div>
        </div>
        <div>
          <p>Price:{price}</p>
          <p>Total:{price * quantity}</p>
        </div>
      </div>
    </>
  );
};

export default ShowCartItem;
