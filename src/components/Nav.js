import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoCallSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Logo from "../assets/1.png";
//---------------------------------------

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
            <ImYoutube className="social-app mx-2 hover:text-[#FF0000]  hover:scale-125 cursor-pointer" />
            <BsFacebook className="social-app mx-2 hover:text-[#17A9FD]  hover:scale-125 cursor-pointer" />
            <FiInstagram className="social-app mx-2 hover:text-rose-400  hover:scale-125 cursor-pointer" />
            <BsWhatsapp className="social-app mx-2 hover:text-[#4FCE5D]  hover:scale-125 cursor-pointer  ease-in-out" />
          </div>
        </div>
      </div>
      <div className="navbar ">
        <div className="flex items-center align-middle">
          <Link to="/">
            <img src={Logo} alt="" className="logo w-[90px] mr-8" />
          </Link>
          <div className="nav-text flex w-[300px] text-[#4d4d4d] ">
            <Link to="/">
              <h1 className="nav-link nav-home-link">HOME</h1>
            </Link>
            <Link to={"/"}>
              <h1 className="nav-link hover:bg-[#f1bc31] hover:text-white ">
                Products
              </h1>
            </Link>
            <Link to={"/contact"}>
              <h1 className="nav-link hover:bg-[#f1bc31] hover:text-white">
                contact
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="searchBox">
            <input
              class="searchInput"
              type="text"
              placeholder="Search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button class="searchButton" type="submit">
              <GoSearch />
            </button>
          </div>
          <div className="cart-icon ml-4 flex  text-[#da5726] items-center text-[30px]">
            <Link to={"/cart"}>
              <AiFillShopping className="" />
            </Link>
            <span className="text-[18px]">{cartItem.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
