"use client";
import { useState } from "react";
import { boys } from "../../../public/dummyData";

const BoyPromptPage = () => {
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
    <div className="my-14">
      <h1 className="text-4xl  text-center text-zinc-800 font-bold mb-10">
        Gemini AI Photo Prompt - Boy
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {boys.map((boy) => (
            <div key={boy?.id} className="card bg-base-100  shadow-sm">
              <figure className="h-[280px] overflow-hidden  pt-1 ">
                <img
                  src={boy.image}
                  alt="boy-image"
                  className="h-full rounded "
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title font-bold text-[24px]">
                  {boy?.title}
                </h2>
                <p className="line-clamp-3">{boy?.prompt}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleCopy(boy?.prompt, boy.id)}
                    className={` mt-1 px-4 py-1 rounded-md text-sm cursor-pointer font-medium text-white transition-all duration-300 ${
                      copiedIndex === boy.id
                        ? " btn bg-green-500 "
                        : "btn btn-primary py-0.5"
                    }`}
                  >
                    {copiedIndex === boy.id ? "Copied" : "Copy Prompt"}
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

export default BoyPromptPage;
