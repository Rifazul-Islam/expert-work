"use client";

import { useState } from "react";

const CommonSection = ({ sections, subTitle, description }) => {
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
    <div className="px-4 mx-2 bg-gray-100">
      <h1 className="lg:text-4xl text-[22px]  text-center text-zinc-800 font-bold mb-6 pt-14 ">
        Gemini AI Photo Prompt - {subTitle}
      </h1>

      <div>
        <p className="text-lg leading-relaxed text-foreground font-medium md:w-[45%] mx-auto pb-2 mb-4">
          {description}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {sections.map((section) => (
            <div key={section?.id} className="card bg-base-100  shadow-sm">
              <figure className="h-[280px] overflow-hidden  pt-1 ">
                <img
                  src={section?.image}
                  alt="section-image"
                  className="h-full rounded "
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title font-bold text-[20px] md:text-[24px]">
                  {section?.title}
                </h2>
                <p className="line-clamp-3">{section?.prompt}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleCopy(section?.prompt, section.id)}
                    className={` mb-1 mr-1 mt-1 px-4 py-1 rounded-md text-sm cursor-pointer font-medium text-white transition-all duration-300 ${
                      copiedIndex === section?.id
                        ? " btn bg-green-500 "
                        : "btn btn-primary hover:bg-blue-600 hover:border-blue-600 py-0.5"
                    }`}
                  >
                    {copiedIndex === section.id ? "Copied" : "Copy Prompt"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
