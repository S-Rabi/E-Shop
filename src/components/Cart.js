import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { TbArrowBack } from "react-icons/tb";

import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

function Cart() {
  const cart = useContext(CartContext);
  const { cartItem, setCartItem } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    setTotalPrice(
      cartItem
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)
    );
    const items = cartItem.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(items);
  }, [cartItem]);

  // Remove an item from the cart
  const handleRemove = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
  };

  // Change the quantity of the products in checkout
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    if (newQuantity <= 0) {
      handleRemove(id);
    } else {
      setCartItem(updatedCart);
    }
  };

  // Clear the cart
  const handleClearCart = () => {
    const result = window.confirm("Are you sure you want to clear the cart?");
    if (result) {
      setCartItem([]);
    }
  };

  // Apply Coupon
  const applyCoupon = () => {
    if (couponInput === "Shopilla" && !couponApplied) {
      const discountedPrice = (totalPrice * 0.8).toFixed(2);
      setTotalPrice(discountedPrice);
      setCouponApplied(true);
      cart.setDiscounted(discountedPrice);
    }
  };

  if (cartItem.length === 0)
    return (
      <div className="m-5 p-4 font-medium">
        <h3>You Have {totalItems} Items In The Shopping Cart</h3>
        <Link to="/">
          <button className="text-white bg-[#4cbead] flex flex-row  items-center py-3 px-5 m-4 rounded hover:bg-[#f1bc31] hover:font-medium">
            <TbArrowBack className="mr-2" /> BACK TO SHOPPING
          </button>
        </Link>
      </div>
    );

  return (
    <>
      <div className="shopping-cart ">
        <div className="mx-[40px] ml-[40px]">
          <Link to="/">
            <h2 className="m-4 p-4 font-medium flex text-center items-center">
              <BiArrowBack />
              &nbsp; Continue shopping
            </h2>
          </Link>
        </div>
        <div className="cart-container ">
          <div className=" order-item flex flex-col items-center  p-2">
            <div className="flex text-left w-[85%] mr-[10%] p-4 border-b-[1px]">
              <h1 className="text-2xl font-medium	pb-4 flex">
                <FaShoppingCart /> &nbsp; Cart Items
              </h1>
            </div>
            <Scrollbars>
              {cartItem.map((item, key) => (
                <div
                  className="ordered-items flex justify-between p-2.5 m-3 w-[450px] h-[160px] border-b-[1px] "
                  key={key}
                >
                  <div className="ordered-items-img">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[150px] h-[100%]	"
                    />
                  </div>
                  <div className=" ordered-items-detail flex flex-col justify-around w-[250px]">
                    <div>
                      <h2 className="font-medium">{item.title}</h2>
                      <p className="item-description">{item.description}</p>
                      <h4>{(item.price * item.quantity).toFixed(2)} € </h4>
                    </div>
                    <div className="flex justify-between p-2">
                      <div>
                        <button
                          className="order-btn "
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button className="order-btn order-btn-quantity">
                          {item.quantity}
                        </button>
                        <button
                          className="order-btn"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          // disabled={item.quantity <= 1} // disable the button if the quantity is 1 or less
                        >
                          -
                        </button>
                      </div>
                      <div className=" flex justify-center items-center cursor-pointer ">
                        <RiDeleteBin6Line
                          onClick={() => handleRemove(item.id)}
                          className="hover:text-[#f1bc31] text-[22px] text-[#0f172a]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </Scrollbars>
          </div>
          <div className="order-summary flex-col border p-6 h-fit mb-8	">
            <h2 className="text-center my-8 text-2xl	font-medium">
              Order Summary
            </h2>
            <div className="order-container">
              <div className="ordered-details flex justify-between w-full my-3 text-[17px] font-medium ">
                <p>Total Amount:</p>
                <p>{totalItems} </p>
              </div>
              <div className="ordered-details flex justify-between w-full my-3 text-[18px] font-medium ">
                <p>Total Price: </p>
                <p>{totalPrice}€</p>
              </div>
              <p></p>
              <p className="text-end my-3">
                <span>(Prices are inclusive all taxes)</span>
              </p>
            </div>
            <Link to="/checkout">
              <button className="bg-[#202938] py-2.5 px-4 my-8 w-full text-white hover:bg-[#f1bc31] ">
                PROCEED TO CHECKOUT
              </button>
            </Link>
            <div className="shopping-coupon">
              <h2 className="font-medium py-2">Apply coupon code</h2>
              <p>Have a coupon code? Apply here!</p>
              <form class="w-full max-w-sm">
                <div class="flex items-center border-b-[1px] border-[#f1bc31] py-1">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
                    type="text"
                    placeholder="code"
                    aria-label="Full name"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  <button
                    class="flex-shrink-0 bg-[#202938] hover:bg-[#f1bc31] border-[#f1bc31] border-[2px] hover:border-[#202938] text-sm text-white py-2 px-4 rounded w-[30%]"
                    type="button"
                    onClick={() => applyCoupon()}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
            <div className="checkout-button  flex items-end pt-20">
              <button
                className="bg-[#202938] py-2.5 px-4 w-full text-white  hover:bg-[#f1bc31] "
                onClick={handleClearCart}
              >
                CLEAR CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
