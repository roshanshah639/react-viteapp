// Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <p className="text-lg font-semibold">Your Company</p>
            <p className="text-sm">Innovating for a better future</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="text-sm">info@yourcompany.com</p>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-sm">
          <Link to="/about" className="text-gray-500 hover:text-white mr-4">
            About Us
          </Link>
          <Link to="/services" className="text-gray-500 hover:text-white mr-4">
            Services
          </Link>
          <Link to="/contact" className="text-gray-500 hover:text-white">
            Contact
          </Link>
        </div>
        <p className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
