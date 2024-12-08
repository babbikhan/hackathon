'use client'; // This marks the component as a client-side component

import { useState } from 'react';
import { FaShoppingCart, FaQuestionCircle, FaLanguage, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [cartItems, setCartItems] = useState(2); // Sample cart items count

  return (
    <>
      {/* First Header (Top Section) */}
      <header className="bg-[#272343] py-2 px-6">
        <div className="max-w-screen-xl mx-auto flex font-inter justify-between items-center text-white text-sm">
          {/* Left: Free Shipping Message */}
          <div>Free Shipping On All Orders Over $50</div>

          {/* Right: Links with Icons */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <FaLanguage className="text-white" />
              <span>English</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaQuestionCircle className="text-white" />
              <span>FAQs</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="text-white" />
              <span>Need Help</span>
            </div>
          </div>
        </div>
      </header>

      {/* Second Header (Middle Section) */}
      <header className="bg-[#F0F2F3] py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="h-10 mr-2" />
            <span className="text-xl font-inter font-semibold text-[#272343]">Comforty</span>
          </div>

          {/* Right: Cart Button with Icon and Cart Count */}
          <div className="relative flex items-center">
            <button className="bg-white text-[#272343] py-2 px-9 rounded-lg font-inter flex items-center">
              <FaShoppingCart className="mr-3" />Cart
            </button>
            {cartItems > 0 && (
              <span className="absolute top-[10px] right-[15px] bg-[#007580] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Third Header (Bottom Section: Navigation) */}
      <header className="bg-[#ffffff] py-3 px-6" >
        <div className="max-w-screen-xl mx-auto flex font-semibold justify-between items-center text-[#636270] text-sm">
          {/* Left: Navigation Links */}
          <nav className="flex space-x-6">
            <a href="" className="hover:text-[#007580] transition">Home</a>
            <a href="shop" className="hover:text-[#007580] transition">Shop</a>
            <a href="product" className="hover:text-[#007580] transition">Product</a>
            <a href="pages" className="hover:text-[#007580] transition">Pages</a>
            <a href="about" className="hover:text-[#007580] transition">About</a>
          </nav>

          {/* Right: Contact Info */}
          <div className="flex items-center">
            <span>Contact: </span>
            <span className="ml-2 font-semibold">(808) 555-0111</span>
          </div>
        </div>
      
      </header>
      <hr></hr>
    </>
  );
};

export default Header;
