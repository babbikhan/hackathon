'use client'; // This marks the component as a client-side component

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col  border-t border-gray-300 mt-2 pt-5 lg:flex-row justify-between">
        
        {/* Logo and Description */}
        <div className="flex flex-col mb-8 lg:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/Logo.png" alt="Comforty Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-[#272343]">Comforty</span>
          </div>
          <p className="text-sm text-gray-500 pr-12">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-[#007580] cursor-pointer" />
            <FaTwitter className="text-[#007580] cursor-pointer" />
            <FaInstagram className="text-[#007580] cursor-pointer" />
            <FaPinterestP className="text-[#007580] cursor-pointer" />
          </div>
        </div>

        {/* Category Section */}
        <div className="flex flex-col mb-8 lg:mb-0">
          <h5 className="text-lg font-semibold text-[#272343] mb-4">Category</h5>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Sofa</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Armchair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Wing Chair</a></li>
            <li><a href="#" className="text-[#007580]">Desk Chair</a></li> {/* Highlighted item */}
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Wooden Chair</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Park Bench</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col mb-8 lg:mb-0">
          <h5 className="text-lg font-semibold text-[#272343] mb-4">Support</h5>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Help & Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#007580]">Help</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold text-[#272343] mb-4">Newsletter</h5>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            />
          </div>
          <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
          <button className="bg-[#007580] text-white py-2 px-4 rounded-md">Subscribe</button>
        </div>
      </div>

      {/* Payment Method Logos */}
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center mt-8">
        <div className="text-sm text-gray-500">© 2021 - Blogy - Designed & Develop by Zakirsoft</div>
        <div className="space-x-4">
          <img src="/paypal.png" alt="PayPal" className="h-6 inline" />
          <img src="/visa.png" alt="Visa" className="h-6 inline" />
          <img src="/mastercard.png" alt="Mastercard" className="h-6 inline" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
