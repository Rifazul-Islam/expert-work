"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-1.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Prompt Expert
            </a>
          </div>

          {/* Navigation Links - Center/Right on Desktop */}
          <div className="hidden md:flex items-right space-x-8 text-lg font-semibold">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Boys
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Girls
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Couple
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Family
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Festival
            </a>
          </div>

          {/* Right Side - Search and Sign In */}
          {/* <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Sign in
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isOpen ? (
                <IoClose className="text-xl" />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Boys
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Girls
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Couple
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Family
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors "
            >
              Festival
            </a>
            {/* <div className="px-3 py-2 border-t border-gray-200 mt-2 pt-2">
              <button className="text-gray-700 hover:text-gray-900 transition-colors mr-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Sign in
              </a>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
}
