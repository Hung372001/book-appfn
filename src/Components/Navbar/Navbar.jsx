import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../images/twitter_profile_image.png";
import Account from "./Account";
import { Buttons } from "./Buttons";
import Cart from "./Cart";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpnen] = useState(false);
  return (
    <div className="container mx-auto">
      <nav className="bg-white">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            {/* <img src={Logo} alt="Logo" className="w-20 h-20 md:cursor-pointer " /> */}
            <h1>Logo</h1>
            <div className="relative block md:hidden w-auto">
              <input
                type="text"
                class="border-[1px] w-full outline-none rounded-lg h-10 border-black"
              />
            </div>
            <div className="text-3xl md:hidden" onClick={() => setOpnen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>

          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <a to="/">Trang Chủ</a>
            </li>
            <NavLinks />
            <div className="relative">
              <input
                type="text"
                class="border-[1px] outline-none rounded-lg h-10 border-black"
              />
              <button className="absolute h-8 bg-[#C92127] w-[72px] text-white rounded-lg right-1 top-[50%] translate-y-[-50%]">
                <ion-icon ClassName="" name="search-outline"></ion-icon>
              </button>
            </div>
          </ul>
          <div className="md:flex  hidden  items-center ">
            <Cart />
            <Buttons />
            <Account />
          </div>
          {/* Mobile */}

          <ul
            className={`
        md:hidden bg-white  absolute w-full h-full bottom-0 py-24 pl-4
duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <a to="/" className="py-7 px-3 inline-block">
                Trang Chủ
              </a>
            </li>
            <NavLinks />
            <div className="py-5">
              <Buttons />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
