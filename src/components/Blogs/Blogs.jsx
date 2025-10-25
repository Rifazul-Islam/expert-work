"use client";
import { useState } from "react";
import { blogs } from "../../../public/dummyData";

function Blogs() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 500);
    } catch (err) {
      console.error("Copy failed: ", err);
    }
  };

  return (
    <>
      <div>
        <h3 className="font-bold lg:text-3xl text-2xl lg:mt-10 mt-5 mb-3">
          Google Gemini - Best Professional Ai Photo Editors
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="">
              <img
                className="w-[500px] lg:h-[650px] h-[700px] mx-auto mt-2 rounded-lg"
                src={blog.image}
                alt=""
              />

              <div className=" pt-1">
                <span className="text-gray-700 line-clamp-2 text-[14px]">
                  {blog.para}
                </span>
                <button
                  onClick={() => handleCopy(blog?.para, blog.id)}
                  className={` mt-1 px-4 py-1 rounded-md text-sm cursor-pointer font-medium text-white transition-all duration-300 ${
                    copiedIndex === blog.id
                      ? "bg-green-500"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {copiedIndex === blog.id ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
