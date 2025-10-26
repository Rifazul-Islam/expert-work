"use client";
import { useState } from "react";
import { couples } from "../../../public/dummyData";
const CouplePromptPage = () => {
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
    <div>
      <h1 className="text-4xl  text-center text-zinc-800 font-bold mb-10">
        Gemini AI Photo Prompt - Couple
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {couples.map((couple) => (
            <div key={couple?.id} className="card bg-base-100  shadow-sm">
              <figure className="h-[280px] overflow-hidden  pt-1 ">
                <img
                  src={couple?.image}
                  alt="couple-image"
                  className="h-full rounded "
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title font-bold text-[24px]">
                  {couple?.title}
                </h2>
                <p className="line-clamp-3">{couple?.prompt}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleCopy(couple?.prompt, couple.id)}
                    className={` mt-1 px-4 py-1 rounded-md text-sm cursor-pointer font-medium text-white transition-all duration-300 ${
                      copiedIndex === couple?.id
                        ? " btn bg-green-500 "
                        : "btn btn-primary py-0.5"
                    }`}
                  >
                    {copiedIndex === couple.id ? "Copied" : "Copy Prompt"}
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

export default CouplePromptPage;
