"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const SliderComponent = () => {
  const images = [
    {
      id: 1,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/blog-1.png",
      alt: "Blog Image 1",
    },
    {
      id: 2,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/blog-2.png",
      alt: "Blog Image 2",
    },
    {
      id: 3,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-23.png",
      alt: "Blog Image 3",
    },
    {
      id: 4,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/blog-13.png",
      alt: "Blog Image 4",
    },
    {
      id: 5,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-22.png",
      alt: "Blog Image 22",
    },
    {
      id: 6,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-2.png",
      alt: "Girl Image 1",
    },
    {
      id: 7,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-4.png",
      alt: "girl Image 2",
    },
    {
      id: 8,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-5.png",
      alt: "Girl Image 3",
    },
    {
      id: 9,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-9.png",
      alt: "Girl Image 9",
    },
    {
      id: 10,
      link: "/prompt-for-gemini-ai-couple-photo",
      image: "/couple-image/couple-1.png",
      alt: "couple Image 8",
    },

    {
      id: 11,
      link: "/gemini-ai-family-photo-prompts",
      image: "/family-images/family-3.png",
      alt: "Family Image 2",
    },
    {
      id: 12,
      link: "/gemini-ai-photo-prompt-festival",
      image: "/festival-image/festival-1.png",
      alt: "Festival Image 8",
    },

    {
      id: 13,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-24.png",
      alt: "Blog Image 24",
    },
    {
      id: 14,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-25.png",
      alt: "Blog Image 25",
    },
    {
      id: 15,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-33.png",
      alt: "Blog Image 33",
    },
    {
      id: 16,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-34.png",
      alt: "Blog Image 34",
    },
    {
      id: 17,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-35.png",
      alt: "Blog Image 34",
    },
    {
      id: 18,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-36.png",
      alt: "Blog Image 34",
    },
    {
      id: 19,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-37.png",
      alt: "Blog Image 34",
    },
    {
      id: 20,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-38.png",
      alt: "Blog Image 38",
    },
    {
      id: 21,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-39.png",
      alt: "Blog Image 40",
    },
    {
      id: 22,
      link: "/gemini-ai-photo-prompt-boy",
      image: "/blog-images/boy-41.png",
      alt: "Blog Image 42",
    },
    {
      id: 23,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-10.png",
      alt: "Girl Image 23",
    },
    {
      id: 24,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-11.png",
      alt: "Girl Image 23",
    },
    {
      id: 25,
      link: "/gemini-ai-photo-prompt-girl",
      image: "/girls-image/girl-16.png",
      alt: "Girl Image 23",
    },
  ];

  return (
    <div className="my-10 mx-4 cursor-pointer md:mx-60">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
        Explore <span className="text-pink-600">Latest</span> Prompts
      </h1>

      <Marquee pauseOnHover={true} speed={80}>
        {images.map((item) => (
          <Link key={item.id} href={item.link}>
            <img
              src={item.image}
              alt={item.alt}
              className="md:h-68 h-60 object-cover md:w-[200px] w-[150px] mx-2 rounded-lg"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default SliderComponent;
