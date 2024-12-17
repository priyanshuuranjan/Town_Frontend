import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4 lg:p-6">
        <a
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-all"
        >
          TOWN & SEA
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex lg:space-x-6 lg:space-y-0 space-y-4`}
        >
          <a
            href="/error"
            className="text-gray-800 hover:text-gray-600 transition-all text-lg lg:text-base"
          >
            AUCTIONS
          </a>
          <a
            href="/error"
            className="text-gray-800 hover:text-gray-600 transition-all text-lg lg:text-base"
          >
            BLOG
          </a>
          <a
            href="/error"
            className="text-gray-800 hover:text-gray-600 transition-all text-lg lg:text-base"
          >
            ABOUT
          </a>
          <a
            href="/error"
            className="text-gray-800 hover:text-gray-600 transition-all text-lg lg:text-base"
          >
            CONTACT
          </a>
          <a
            href="/login"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all text-center"
          >
            LOGIN / REGISTER
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
