import React from "react";

const HowUse = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Categories",
      description:
        "Choose from our creative prompt collections — Boy, Girl, Couple, Festival, or Family.",
    },
    {
      number: 2,
      title: "Copy Your Favorite Prompt",
      description:
        "Click the Copy Prompt button to instantly copy your selected prompt.",
    },
    {
      number: 3,
      title: "Open Gemini AI",
      description: "Visit Gemini AI (or any AI image generator you like).",
    },
    {
      number: 4,
      title: "Paste & Generate",
      description:
        "Simply paste the prompt, upload your image, hit Generate — and watch the AI bring your imagination to life!",
    },
  ];

  return (
    <main className=" bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <section className="relative pt-20 pb-6  px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              How it
              <span className="bg-gradient-to-r pl-3 from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Four simple steps to create stunning AI-generated images
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-4 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
                )}

                <div className="relative h-full p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500">
                  <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold flex items-center justify-center text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowUse;
