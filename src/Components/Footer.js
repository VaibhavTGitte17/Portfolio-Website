import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} className="text-blue-600"/>
              <FaTwitter size={24} className="text-blue-600"/>
              <FaInstagram size={24} className="text-pink-600"/>
              <FaLinkedinIn size={24} className="text-blue-600"/>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaPhoneAlt size={24} className="text-green-700"/>
              <span className="text-lg">(91) 9130706947</span> 
              <MdOutlineMail size={24} className="text-red-600"/>
              <span className="text-lg">vaibhavgitte14@gmail.com</span> 
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
