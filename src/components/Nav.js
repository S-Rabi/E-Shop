import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import CartContext from "../CartContext";
import { useContext } from "react";
import Logo from "./img/logo.png";

const Nav = () => {
  const { cartItem } = useContext(CartContext);

  return (
    <>
      <div className="top-navbar">
        <p>+4915213331433</p>
        <div className="social-app">
          <p>SOCIAL MEDIA</p>
        </div>
      </div>
      <nav className="navbar">
        <Link to={"/"} className="flex items-center">
          <img src={Logo} alt="" className="logo w-[60px] p-2 rounded" />
          <h1 className="bg-[#f1bc31]">HOME</h1>
          <div className="nav-text flex justify-around w-[300px]  text-[#4d4d4d]">
            <Link to={"/"} className="flex items-center">
              <h1>about</h1>
            </Link>
            <Link to={"/"} className="flex items-center">
              <h1>contact</h1>
            </Link>{" "}
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className=" flex items-center text-[25px]	">
            <AiFillShopping />
            <span className="text-[20px]">{cartItem.length}</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
