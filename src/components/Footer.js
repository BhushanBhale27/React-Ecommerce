import React from "react";
import { ImGithub } from "react-icons/im";
import { logoLight, paymentLogo } from "../assets/index";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* logo with Icons  */}
        <div className="flex flex-col gap-7 col-span-1">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">ReactStore.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-400 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Locate Us  */}
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD,M G Road, Scoar-mall</p>
            <p>Mobile: +91 97859628</p>
            <p>Phone: 0240 24769821</p>
            <p>e-mail: sstore@gmail.com</p>
          </div>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            My Account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <BsPaypal />
            </span>
            checkout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <FaHome />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span className="text-lg">
              <MdLocationOn />
            </span>
            help & support
          </p>
        </div>
        <div className="text-base flex flex-col gap-2">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
