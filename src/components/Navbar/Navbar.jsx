"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <Link className="hover:text-[#047bf8] py-1.5 rounded-lg" href="/">
        Home
      </Link>
      <Link
        className=" hover:text-[#047bf8] py-1.5 rounded-lg"
        href="/boy-prompt"
      >
        Boys
      </Link>

      <Link
        className="hover:text-[#047bf8]  py-1.5 rounded-lg"
        href="/girl-prompt"
      >
        Girl
      </Link>
      <Link
        className="hover:text-[#047bf8] py-1.5 rounded-lg"
        href="/couple-prompt"
      >
        Couple
      </Link>
      <Link
        className="hover:text-[#047bf8] py-1.5 rounded-lg"
        href="/family-prompt"
      >
        Family
      </Link>
      <Link
        className="hover:text-[#047bf8] py-1.5 rounded-lg"
        href="/festival-prompt"
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
          <div className="flex-shrink-0  ">
            <img className=" h-16 " src="/gemini-images/logos.png" alt="" />
          </div>

          {/* Navigation Links - Center/Right on Desktop */}
          <div className="hidden md:flex items-center  text-lg font-semibold">
            <p className="text-gray-700 space-x-6 hover:text-gray-900 transition-colors">
              {menuItems}
            </p>
          </div>

          <div className="hidden md:flex items-right  text-lg font-semibold">
            <Link
              className="pl-4"
              target="blank"
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
            >
              <button className="group cursor-pointer relative px-2 py-1  bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-100 flex items-center gap-3 border border-blue-400/30 hover:border-blue-300/60 backdrop-blur-sm">
                <MdDownload size={18} className="animate-bounce" />
                <span className="">Download Now </span>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              </button>
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
            {/* <p className="text-gray-700 flex flex-col pl- hover:text-gray-900 transition-colors">
              {menuItems}
            </p> */}
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#047bf8] py-1.5 border rounded-lg pl-3"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className=" hover:text-[#047bf8] py-1.5 rounded-lg border pl-3"
              href="/boy-prompt"
            >
              Boys
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#047bf8]  py-1.5 rounded-lg border pl-3"
              href="/girl-prompt"
            >
              Girl
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#047bf8] py-1.5 rounded-lg border pl-3"
              href="/couple-prompt"
            >
              Couple
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#047bf8] py-1.5 rounded-lg border pl-3"
              href="/family-prompt"
            >
              Family
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#047bf8] py-1.5 rounded-lg border pl-3"
              href="/festival-prompt"
            >
              Festival
            </Link>

            <Link
              className=" py-2"
              onClick={() => setIsOpen(false)}
              target="blank"
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
            >
              <button className="group  cursor-pointer relative px-5 w-full lg:w-[45%] mx-auto py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-100 flex items-center gap-3 border border-blue-400/30 hover:border-blue-300/60 backdrop-blur-sm">
                <MdDownload size={24} className="animate-bounce " />
                <span className="text-xl">Download Now </span>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
