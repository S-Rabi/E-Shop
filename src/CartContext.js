import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
