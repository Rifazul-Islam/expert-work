//rfc

import React from "react";
import Blogs from "../Blogs/Blogs";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="lg:mx-26 mt-1.5">
      <div className="bg-gray-200 rounded-2xl overflow-hidden lg:h-[500px] mt-1">
        <Link href="https://gemini.google.com/app">
          <img
            src="/gemini-images/gemini-remove.png"
            alt="Gemini"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      <div>
        <Link
          target="blank"
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
        >
          <button className="btn btn-primary">Download</button>
        </Link>
      </div>
      <Blogs />
    </div>
  );
}
