import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Basic() {
  const {
    cartItem
  } = useContext(CartContext);
  console.log("cartItem", cartItem);
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItem.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <div>
        <div className="shopping-cart-btn ">
          <button className="button">Review order</button>
          <button className="button">Shipping address</button>
          <button className="button">Payment details</button>
        </div>
        <div class="relative mx-auto w-full bg-white">
          <div class="grid min-h-screen grid-cols-10">
            <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
              <div class="mx-auto w-full max-w-lg">
                <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                  Secure Checkout
                  <span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
                </h1>
                <form action="" class="mt-10 flex flex-col space-y-4">
                  <div>
                    <label
                      for="card-name"
                      class="text-xs font-semibold text-gray-500"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="card-name"
                      name="card-name"
                      placeholder="Name on the card"
                      class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div class="relative">
                    <label
                      for="card-number"
                      class="text-xs font-semibold text-gray-500"
                    >
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      placeholder="1234-5678-XXXX-XXXX"
                      class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                    <img
                      src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                      alt=""
                      class="absolute bottom-3 right-3 max-h-4"
                    />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-500">
                      Expiration date
                    </p>
                    <div class="mr-6 flex flex-wrap">
                      <div class="my-1">
                        <label for="month" class="sr-only">
                          Select expiration month
                        </label>
                        <select
                          name="month"
                          id="month"
                          class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="">Month</option>
                        </select>
                      </div>
                      <div class="my-1 ml-3 mr-6">
                        <label for="year" class="sr-only">
                          Select expiration year
                        </label>
                        <select
                          name="year"
                          id="year"
                          class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="">Year</option>
                        </select>
                      </div>
                      <div class="relative my-1">
                        <label for="security-code" class="sr-only">
                          Security code
                        </label>
                        <input
                          type="text"
                          id="security-code"
                          name="security-code"
                          placeholder="CVV"
                          class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <p class="mt-10 text-center text-sm font-semibold text-gray-500">
                  By placing this order you agree to the{" "}
                  {/* <a
                    href="#"
                    class="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
                  >
                    Terms and Conditions
                  </a> */}
                </p>
                <button
                  type="submit"
                  class="mt-4 inline-flex w-full items-center justify-center rounded bg-[#202938] py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                >
                  Place Order
                </button>
              </div>
            </div>
            <div className="order-summary payment-summary w-[400px] flex-col border p-6 h-fit mb-8	">
              <h2 className="text-center my-8 text-2xl	font-medium">
                Order Summary
              </h2>
              <div className="order-container">
                <div className="ordered-details flex justify-between w-full my-3 text-[17px] font-medium ">
                  <p>Total Items: {totalItems}</p>
                </div>
                <div className="ordered-details flex justify-between w-full my-3 text-[18px] font-medium ">
                  <p>Total Price is: {totalPrice}€</p>
                </div>
                <p className="text-end my-3">
                  (Prices are inclusive all taxes)
                </p>
                <hr />
              </div>
              <div className="shopping-contact ">
                <h2 className="support mt-4 mb-3 font-medium">Support</h2>
                <h4>+491521333433</h4>
                <h4>support@behnam.com</h4>
                <p>Call us for payment related issues</p>
                <h3 className="support mt-4 mb-1 font-medium">
                  Money Back Guarantee
                </h3>
                <p>Within 14 Working days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
