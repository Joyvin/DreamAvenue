"use client";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiFillPlayCircle, AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// import logo from "../images/logo.svg";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between lg:justify-center items-center lg:gap-20 gap-6 p-4">
      <a href="/">
        <div className="flex justify-center items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-20 cursor-pointer" />
          <h1 className="text-white text-4xl font-extrabold">Dream Avenue</h1>
        </div>
      </a>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">
          <a href="/">Home</a>
        </li>
        {/* <li className="mx-4 cursor-pointer">
          <a href="#">Rent</a>
        </li> */}
        <li className="mx-4 cursor-pointer">
          <a href="#">Buy</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="/list">List Property</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="/addProperty">Add Property</a>
        </li>
        <ul className="flex justify-center items-center mr-4 lg:ml-20 ml-0 gap-4">
        <li className="bg-white flex justify-center items-center rounded-full cursor-pointer  py-2 px-7">
          <AiFillPlayCircle className="text-black mr-2" />
          <p className="text-black text-base font-semibold">
            <a href="#">Connect Wallet</a>
          </p>
        </li>
        {
          !user ? (
            <li className="bg-[#f9cb6f] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#ffbf3e] py-2 px-7">
          <AiOutlineLogin className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            <a href="/sign-in">Login</a>
          </p>
        </li> 
          ) : (
            <li className="bg-red-400 flex justify-center items-center rounded-full cursor-pointer hover:bg-red-500 py-2 px-7">
          <AiOutlineLogin className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            <button onClick={() => signOut(auth)}><a href="/sign-in">Logout</a></button>
          </p>
        </li> 
          )
        }
        </ul>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-white md:hidden cursor-pointer text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="/">Home</a>
            </li>
            {/* <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="#">Rent</a>
            </li> */}
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="#">Buy</a>
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="/list">List Property</a>
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="/addProperty">Add Property</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;