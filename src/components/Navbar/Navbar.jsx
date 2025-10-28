"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <Link
        onClick={() => setIsOpen(false)}
        href="/"
        className={`py-1.5 rounded-lg border md:border-0  pl-3 md:pl-0 ${
          pathname === "/"
            ? "text-[#047bf8]"
            : "hover:text-[#047bf8] text-gray-700"
        }`}
      >
        Home
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        href="/gemini-ai-photo-prompt-boy"
        className={`py-1.5 rounded-lg border md:border-0  pl-3 md:pl-0 ${
          pathname === "/gemini-ai-photo-prompt-boy"
            ? "text-[#047bf8]"
            : "hover:text-[#047bf8] text-gray-700"
        }`}
      >
        Boys
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        href="/gemini-ai-photo-prompt-girl"
        className={`py-1.5 border md:border-0  pl-3 md:pl-0 rounded-lg ${
          pathname === "/gemini-ai-photo-prompt-girl"
            ? "text-[#047bf8]"
            : "hover:text-[#047bf8] text-gray-700"
        }`}
      >
        Girl
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        href="/prompt-for-gemini-ai-couple-photo"
        className={`py-1.5 border md:border-0  pl-3 md:pl-0 rounded-lg ${
          pathname === "/prompt-for-gemini-ai-couple-photo"
            ? "text-[#047bf8]"
            : "hover:text-[#047bf8] text-gray-700"
        }`}
      >
        Couple
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        href="/gemini-ai-family-photo-prompts"
        className={`py-1.5 border md:border-0  pl-3 md:pl-0 rounded-lg ${
          pathname === "/gemini-ai-family-photo-prompts"
            ? "text-[#047bf8]"
            : "hover:text-[#047bf8] text-gray-700"
        }`}
      >
        Family
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        href="/gemini-ai-photo-prompt-festival"
        className={`py-1.5 rounded-lg  border md:border-0  pl-3 md:pl-0 ${
          pathname === "/gemini-ai-photo-prompt-festival"
            ? "text-[#047bf8]"
            : "hover:text-[#047bf8] text-gray-700"
        }`}
      >
        Festival
      </Link>
    </>
  );

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-1.5">
      <div className=" lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center  ">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <img
              className="h-14 md:h-16 "
              src="/gemini-images/logos.png"
              alt=""
            />
          </div>

          {/* Navigation Links - Center/Right on Desktop */}
          <div className="hidden md:flex items-center text-lg font-semibold space-x-6">
            {menuItems}
          </div>

          <div className="hidden md:flex items-right  text-lg font-semibold">
            <Link
              className="pl-4"
              target="blank"
              href="https://gemini.google.com/app"
            >
              <main className="flex items-center cursor-pointer justify-center btn btn-outline  px-4 py-2 rounded-lg border-blue-600   transition-all duration-300">
                <button className="text-xl cursor-pointer  font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  ">
                  Go Gemini AI
                </button>
              </main>
            </Link>
          </div>

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
          <div className="md:hidden space-y-1.5 flex mx-4 flex-col pb-4 border-t border-gray-200">
            {menuItems}

            <Link
              className="pl-0"
              target="blank"
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
            >
              <main className="flex items-center cursor-pointer justify-center btn btn-outline px-4 py-2 rounded-lg border-blue-600  transition-all duration-300">
                <button className="text-xl cursor-pointer  font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Go Gemini AI
                </button>
              </main>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
