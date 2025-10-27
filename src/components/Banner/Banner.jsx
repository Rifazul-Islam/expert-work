"use client";

import { MdDownload } from "react-icons/md";

import Link from "next/link";

function Banner() {
  return (
    <div>
      <div className="relative w-full h-[650px] bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 overflow-hidden flex items-center justify-center">
        {/* Diagonal stripe pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/gemini-images/banner-image.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "scroll",
              borderRadius: "1rem",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 text-balance">
            Gemini AI
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-6 text-balance">
            Redefining Professional Photo Editing
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed text-balance">
            Advanced intelligence at your fingertips, empowering you to create
            stunning visuals effortlessly with next-generation AI precision.
          </p>

          {/* Download button */}
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
  );
}

export default Banner;
