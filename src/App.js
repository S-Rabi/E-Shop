import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import CartProvider from "./CartContext";
import Cart from "./components/Cart";
import AddressForm from "./components/AddressForm";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<AddressForm />} />
            <Route path="/pay" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
