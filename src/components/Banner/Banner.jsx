//rfc

import React from "react";
import Blogs from "../Blogs/Blogs";

export default function Banner() {
  return (
    <div className="lg:mx-26 mt-1.5">
      <div className=" bg-gray-200 rounded-2xl overflow-hidden lg:h-[500px] mt-1">
        <img
          src="/gemini-images/gemini-remove.png"
          alt="Gemini"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <Blogs />
    </div>
  );
}
