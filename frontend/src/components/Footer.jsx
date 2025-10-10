import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* -------Left Side------ */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem Ipsum is samply dummy text of the printing and typesetting
            industry. Lorem Insum has been the Industry's standard dummy text
            ever since the 1500s, when an unknown printer focits galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* -------Mid Side------ */}
        <div>
          <p className="text-[16px] font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1.5 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* -------Right Side------ */}
        <div>
          <p className="text-[16px] font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-988-376-4156</li>
            <li>pramanikamrit778@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------Copyright Text------ */}
      <div>
        <hr />
        <p className="py-3 text-center text-sm text-gray-900">Copyright 2025@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
