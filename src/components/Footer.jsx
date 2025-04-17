// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* IPL Score Tracker Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">IPL Score Tracker</h2>
          <p className="text-gray-300">
            The ultimate destination for IPL cricket fans to stay updated with
            live sessions, team standings, and match schedules.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Live Sessions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Stats
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
          </ul>
        </div>

        {/* Contact With Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact with Us</h3>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* Mobile App */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Download Our App</h3>
          <p className="text-gray-300">
            Download our mobile app for a better experience.
          </p>
          {/* Add download badges here if needed */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        <br />
        <span className="inline-flex items-center justify-center gap-1">
          <FaRegCopyright className="text-sm" /> {new Date().getFullYear()} IPL
          Score Tracker. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
