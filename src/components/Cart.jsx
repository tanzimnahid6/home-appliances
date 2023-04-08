import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowCartItem from "./ShowCartItem";
import { clearCart } from "../utilities/utilities";
import { toast } from "react-hot-toast";

const Cart = () => {
  const data = useLoaderData();
  const { cartArray, produtcs } = data;
  const [cart,setCart] = useState(cartArray)

  const handleCart =()=>{
    clearCart()
    setCart([])
    toast('Clear all cart item')
  }

  console.log(cart);
  return (
    <>
      <div className="w-2/5 bg-cyan-75  mx-auto flex flex-col items-center">
        {cart.length > 0 ? (
          <h1 className="mr-auto text-xl my-8">Review Cart Item</h1>
        ) : (
          <h1 className="mr-auto text-xl my-8">OPS Cart is EMPTY !!!</h1>
        )}
        {cart.map((item) => (
          <ShowCartItem key={item.id} item={item}></ShowCartItem>
        ))}
        <div>
          <div className="text-right">
            <h1>Total amount : {}$</h1>
            <p>Not including taxes and shipping costs</p>
          </div>
          <div className="flex gap-2 my-8">
            {cart.length > 0 ? (
              <button
                onClick={handleCart}
                class="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Clear Cart
              </button>
            ) : (
              <button class="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                Back To Shop
              </button>
            )}
            <button class=" hover:bg-cyan-400 hover:text-white border font-bold py-2 px-4 rounded-full">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
