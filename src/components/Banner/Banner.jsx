//rfc

import React from "react";
import Blogs from "../Blogs/Blogs";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { FiStar } from "react-icons/fi";

export default function Banner() {
  return (
    <div className="lg:mx-20 mt-1.5">
      <div>
        <div className="mt-2 mx-2 mb-12 ">
          <div className="w-full bg-gradient-to-br pb-20 from-[#1a1f35] via-[#2d1b4e] to-[#1a1f35] p-8 rounded-md shadow-lg overflow-hidden relative">
            {/* Subtle background pattern  */}
            <div className="absolute inset-0 opacity-5">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
              >
                <path
                  d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zM64 62v2h-2v-2h2zM32 80h-2v-2h2v2zm40-40h2v2h-2v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              {/* Left side */}
              <div className="flex-1 text-left mb-8 md:mb-0">
                <div className="overflow-hidden  mt-1 ">
                  <img
                    src="/gemini-images/gemini-remove.png"
                    alt="Gemini"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className=" w-full lg:-mt-14 -mt-1 ">
                    <Link
                      className=""
                      target="blank"
                      href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
                    >
                      <button className="group cursor-pointer relative px-10 lg:w-[45%] mx-auto py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-100 flex items-center gap-3 border border-blue-400/30 hover:border-blue-300/60 backdrop-blur-sm">
                        <MdDownload size={24} className="animate-bounce" />
                        <span className="text-xl">Download Now </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right side - creative design  */}
              <div className="flex-shrink-0 w-full md:w-1/2 h-80 md:h-96 relative">
                <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
                  <div className="absolute inset-4 bg-blue-400 rounded-full blur-xl opacity-20"></div>
                </div>

                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl transform rotate-12 opacity-80 shadow-lg backdrop-blur-sm"></div>
                <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full transform -rotate-12 opacity-80 shadow-lg backdrop-blur-sm"></div>

                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-100"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                </div>

                <div className="absolute inset-0 opacity-10">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
                      backgroundSize: "50px 50px",
                    }}
                  ></div>
                </div>

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 Q50,20 100,50"
                    fill="none"
                    stroke="rgba(167,139,250,0.2)"
                    strokeWidth="0.5"
                  >
                    <animate
                      attributeName="d"
                      dur="5s"
                      repeatCount="indefinite"
                      values="M0,50 Q50,20 100,50; M0,50 Q50,80 100,50; M0,50 Q50,20 100,50"
                    />
                  </path>
                  <path
                    d="M0,30 L100,70"
                    fill="none"
                    stroke="rgba(139,92,246,0.15)"
                    strokeWidth="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      dur="3s"
                      repeatCount="indefinite"
                      values="0.15;0.3;0.15"
                    />
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Blogs />
    </div>
  );
}
