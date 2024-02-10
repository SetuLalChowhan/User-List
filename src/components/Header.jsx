import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(true);
  const [active, setActive] = useState("Home");
  const allNav = ["Home", "Add User"];
  return (
    <>
      <div className="flex flex-col bg-blue-800 p-3 font-semibold shadow-md sticky top-0  z-30 ">
        <div className="flex justify-between">
          <div className="flex justify-center items-center text-white">
            <Link
              to="/"
              className=" text-lg"
              onClick={() => {
                setActive("Home");
              }}
            >
              Technext Limited
            </Link>
          </div>
          <div className=" hidden lg:flex gap-14 mr-[500px]  text-white ">
            <div className=" flex justify-center gap-10 ">
              <Link to={"/"} className="text-lg ">
                Home
              </Link>
              <a href={`#userAdd`} className="text-lg ">
              Add User
            </a>
            </div>
          </div>
          <div
            className="lg:hidden flex justify-center items-center"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? (
              <GiHamburgerMenu size={20} color="white" />
            ) : (
              <AiOutlineClose size={20} color="white" />
            )}
          </div>
        </div>
        <div
          className={
            nav
              ? "hidden"
              : " flex flex-col justify-center items-center gap-6  text-white mt-6 "
          }
        >
          <div className="  flex   gap-4  flex-col h-24  ">
            <Link to={"/"} className="text-lg ">
              Home
            </Link>
            <a href={`#userAdd`} className="text-lg ">
              Add User
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
