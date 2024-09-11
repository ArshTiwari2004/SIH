import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Lumina</h3>
          <p className="text-gray-400 mb-4">
            Lumina provides a comprehensive platform to help educational institutes create visually compelling, data-driven annual reports with ease.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="text-gray-400 hover:text-white">Our Services</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="/signup" className="text-gray-400 hover:text-white">Sign Up</a>
            </li>
            <li className="mb-2">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-blue-500 mr-3" />
              <span className="text-gray-400">Delhi</span>
            </li>
            <li className="flex items-center mb-2">
              <FaPhoneAlt className="text-blue-500 mr-3" />
              <span className="text-gray-400">+91 1234567890</span>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span className="text-gray-400">support@Lumina.com</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Social Media Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-500 mb-4 md:mb-0">&copy; 2024 Lumina. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram /></a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
