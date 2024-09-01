import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <FaFacebook size={24} className="text-blue-600" />
              <FaTwitter size={24} className="text-blue-600" />
              <FaInstagram size={24} className="text-pink-600" />
              <FaLinkedinIn size={24} className="text-blue-600" />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-6 md:space-y-0">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt size={24} className="text-green-700" />
                <span className="text-lg">(91) 9130706947</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdOutlineMail size={24} className="text-red-600" />
                <span className="text-lg">vaibhavgitte14@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
