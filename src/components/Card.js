import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function Card({ el }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div class="relative m-8 flex w-[230px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
        <div class="relative mx-2 mt-2 flex h-40 overflow-hidden rounded-lg ">
          <img class="object-cover mx-auto" src={el.image} alt="itemImage" />
        </div>
        <div class="mt-2 px-4 pb-4">
          <h2 class="text-l truncate font-medium text-slate-900">{el.title}</h2>
          <div class="mt-1 mb-3 flex items-center justify-between">
            <p class="text-2xl font-bold text-slate-900">{el.price} €</p>
            <div class="flex items-center">
              <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </span>
            </div>
          </div>
          <button
            className="w-full flex items-center justify-around rounded-md bg-slate-900 px-5 py-2.5 text-center text-md font-medium text-white hover:bg-gray-700 hover:text-[18px] focus:ring-2 focus:ring-blue-300"
            onClick={() => addToCart(el)}
          >
            Add to cart
            <AiFillShopping className="text-[25px] hover:text-yellow-200" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
