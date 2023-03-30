import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoCallSharp } from "react-icons/io5";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Logo from "../assets/1.png";

const Nav = () => {
  const { cartItem, filter, setFilter } = useContext(CartContext);



  return (
    <>
      <div className=" top-nav-container">
        <div className="top-navbar">
          <p className="social-app flex items-center ">
            <IoCallSharp className=" m-1 hover:scale-110 hover:text-[#f1bc31] " />
            +4915213331433
          </p>
          <div className="social-app flex p-2 ">
            <ImYoutube className="social-app mx-2 text-[#FF0000]  hover:scale-125 cursor-pointer" />
            <BsFacebook className="social-app mx-2 text-[#17A9FD]  hover:scale-125 cursor-pointer" />
            <FiInstagram className="social-app mx-2 text-rose-400  hover:scale-125 cursor-pointer" />
            <BsWhatsapp className="social-app mx-2 text-[#4FCE5D]  hover:scale-125 cursor-pointer  ease-in-out" />
          </div>
        </div>
      </div>
      <div className="navbar ">
        <div className="flex items-center align-middle">
          <img src={Logo} alt="" className="logo w-[90px] mr-8" />

          <div className="nav-text flex w-[300px] text-[#4d4d4d] ">
            <Link to="/">
              <h1 className="nav-link nav-home-link">HOME</h1>
            </Link>
            <Link to={"/"}>
              <h1 className="nav-link hover:bg-[#f1bc31] hover:text-white ">
                about
              </h1>
            </Link>
            <Link to={"/"}>
              <h1 className="nav-link hover:bg-[#f1bc31] hover:text-white">
                contact
              </h1>
            </Link>{" "}
          </div>
        </div>
        <div className="search-bar">
          <div class="relative border flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        <Link to={"/cart"}>
          <div className=" flex text-[#da5726] items-center text-[30px]	">
            <AiFillShopping />
            <span className="text-[18px]">{cartItem.length}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
