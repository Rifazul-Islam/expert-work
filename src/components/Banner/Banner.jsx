//rfc

import React from "react";
import Blogs from "../Blogs/Blogs";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="lg:mx-26 mt-1.5">
      <div className="bg-gray-200 rounded-2xl overflow-hidden lg:h-[500px] mt-1 relative">
        <img
          src="/gemini-images/gemini-remove.png"
          alt="Gemini"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute  bottom-[50%] left-[40%] lg:left-[45%]  top-[70%] right-[50%]">
          <Link
            target="blank"
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
          >
            <button className="btn btn-primary px-10">Download</button>
          </Link>
        </div>
      </div>

      <Blogs />
    </div>
  );
}
