import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CartProvider from "./CartContext";
import Cart from "./components/Cart";
import AddressForm from "./components/AddressForm";
import Payment from "./components/Payment";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<AddressForm />} />
            <Route path="/pay" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
