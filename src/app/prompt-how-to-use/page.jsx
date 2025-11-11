const Works = () => {
  const points = [
    {
      number: "1",
      title: "Your Personal Image",
      description: "your face or portrait that defines the subject.",
    },
    {
      number: "2",
      title: "Creative Style Instructions",
      description: "details like lighting, mood, fashion, and composition.",
    },
    {
      number: "3",
      title: "Professional Aesthetics",
      description:
        "studio lighting, editorial looks, and modern visual trends.",
    },
  ];

  const benefits = [
    {
      title: "Save time",
      description: "skip manual retouching and let AI handle the details.",
    },
    {
      title: "Stay consistent",
      description:
        "maintain the same style, tone, and branding across all your visuals.",
    },
    {
      title: "Boost creativity",
      description:
        "experiment with unique styles like vintage, cinematic, or editorial looks that are hard to capture manually.",
    },
    {
      title: "Stand out online",
      description:
        "create eye-catching visuals that elevate your social media, portfolio, or website presence.",
    },
  ];
  return (
    <div className="md:ml-34">
      <section className="px-4 pt-10  md:px-28 ">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How to Use ?
          </h2>

          <div className="space-y-3 mb-6">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              <span className="font-bold text-[22px]">1.Choose Categories</span>
              <p>
                Choose from our creative prompt collections — Boy, Girl, Couple,
                Festival, or Family.
              </p>
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              <span className="font-bold  text-[22px]">
                2.Copy Your Favorite Prompt
              </span>
              <p>
                Click the Copy Prompt button to instantly copy your selected
                prompt.
              </p>
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              <span className="font-bold text-[22px]">3.Open Gemini AI</span>
              <p>Visit Gemini AI (or any AI image generator you like). </p>
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              <span className="font-bold text-[22px]">4.Paste & Generate</span>
              <p>
                Simply paste the prompt, hit Generate, and watch the AI bring
                your imagination to life!.
              </p>
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-28 ">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is a "Gemini Prompt"?
          </h2>

          <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
            Before we go further, let's understand what a Gemini prompt actually
            means. In this context, "Gemini" refers to a smart AI prompting
            style (or tool) that blends together three key elements:
          </p>

          <div className="space-y-3 mb-6">
            {points.map((point) => (
              <p
                key={point.number}
                className="text-base md:text-lg text-foreground leading-relaxed"
              >
                <span className="font-bold">
                  {point.number}. {point.title}
                </span>{" "}
                - {point.description}
              </p>
            ))}
          </div>

          <p className="text-base md:text-lg text-foreground leading-relaxed">
            In short, a Gemini prompt combines your photo with creative style
            guidance to help the AI generate personalized, high-quality images —
            realist.
          </p>
        </div>
      </section>

      <section className="px-4 py-6 md:px-28 md:py-10  ">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Use AI Photo-Editing Prompts?
          </h2>

          <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
            Using AI-powered photo-editing prompts allows you to:
          </p>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-foreground leading-relaxed"
              >
                <span className="font-bold">{benefit.title}</span> —{" "}
                {benefit.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-28 md:py-10 md:pb-26 ">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            User Tips?
          </h2>

          <div className="space-y-3">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Use natural lighting in your photo for best results.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Keep your face clear and centered.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Try cinematic or pastel tones for artistic effects
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
