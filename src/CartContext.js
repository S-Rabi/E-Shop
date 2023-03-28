import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const [ totalItems, setTotalItems ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ discounted, setDiscounted ] = useState(0);
  // const [ couponInput, setCouponInput ] = useState("");
  // const [ couponApplied, setCouponApplied ] = useState(false);


  const addToCart = (el) => {
    const itemsInCart = cartItem.find((i) => i.id === el.id);

    if (itemsInCart) {
      setCartItem(
        cartItem.map((item) =>
          item.id === el.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      console.log(cartItem);
    } else {
      setCartItem([...cartItem, { ...el, quantity: 1 }]);
    }
    console.log(cartItem);
  };

  const updateItem = (updatedItem) => {
    setCartItem(updatedItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        updateItem,
        discounted,
        setDiscounted
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
