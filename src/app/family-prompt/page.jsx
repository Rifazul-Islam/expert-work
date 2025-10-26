"use client";
import { useState } from "react";
import { familys } from "../../../public/dummyData";

const FamilyPromptPage = () => {
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
      <h1 className="text-4xl  text-center text-zinc-800 font-bold mb-8 ">
        Gemini AI Photo Prompt - Family
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {familys.map((family) => (
            <div key={family?.id} className="card bg-base-100  shadow-sm">
              <figure className="h-[280px] overflow-hidden  pt-1 ">
                <img
                  src={family?.image}
                  alt="family-image"
                  className="h-full rounded "
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title font-bold text-[24px]">
                  {family?.title}
                </h2>
                <p className="line-clamp-3">{family?.prompt}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleCopy(family?.prompt, family.id)}
                    className={` mt-1 px-4 py-1 rounded-md text-sm cursor-pointer font-medium text-white transition-all duration-300 ${
                      copiedIndex === family?.id
                        ? " btn bg-green-500 "
                        : "btn btn-primary py-0.5"
                    }`}
                  >
                    {copiedIndex === family.id ? "Copied" : "Copy Prompt"}
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

export default FamilyPromptPage;
