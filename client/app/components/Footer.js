import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#ffffff] py-8 md:px-2 px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <img
          className="col-span-2 w-[20rem]"
          src="https://images.squarespace-cdn.com/content/v1/598c1a6b46c3c4a7b18a8908/f3c4acee-fe02-442b-b1e5-bcf2eabd6c34/Chatbot_Icon.png"
          alt=""
        />
        <div className="mt-6">
          <h6 className="font-bold uppercase py-2">Features</h6>
          <ol>
            <li className="py-2">Feature1</li>
            <li className="py-2">Feature1</li>
            <li className="py-2">Feature1</li>
          </ol>
        </div>
        <div className="mt-6">
          <h6 className="font-bold uppercase py-2">Links</h6>
          <ol>
            <a href="/">
              <li className="py-2">Home</li>
            </a>
            <a href="/about">
              <li className="py-2">About</li>
            </a>
            <a href="/contact">
              <li className="py-2">Contact</li>
            </a>
          </ol>
        </div>
        <div className="col-span-2 mt-6 md:pt-2">
          <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
          <p className="py-4">
            The latest news, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-2 border-2 border-black"
              type="email"
              placeholder="Enter email"
            />
            <button
              className="p-3 mb-2 bg-blue-500 text-white rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1280px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
        <p>2024 Dream Avenue, All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitch />
          <FaTwitter />
        </div>
      </div>
      <div className="flex flex-col max-w-[1280px] h-24 px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
      </div>
    </div>
  );
};

export default Footer;
