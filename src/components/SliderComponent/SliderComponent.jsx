"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const SliderComponent = () => {
  const images = [
    {
      id: 1,
      link: "/boy-prompt",
      image: "/blog-images/blog-1.png",
      alt: "Blog Image 1",
    },
    {
      id: 2,
      link: "/boy-prompt",
      image: "/blog-images/blog-2.png",
      alt: "Blog Image 2",
    },
    {
      id: 3,
      link: "/boy-prompt",
      image: "/blog-images/blog-3.png",
      alt: "Blog Image 3",
    },
    {
      id: 4,
      link: "/boy-prompt",
      image: "/blog-images/blog-13.png",
      alt: "Blog Image 4",
    },
    {
      id: 5,
      link: "/boy-prompt",
      image: "/blog-images/blog-5.png",
      alt: "Blog Image 5",
    },
    {
      id: 6,
      link: "/girl-prompt",
      image: "/girls-image/girl-2.png",
      alt: "Girl Image 1",
    },
    {
      id: 7,
      link: "/girl-prompt",
      image: "/girls-image/girl-4.png",
      alt: "girl Image 2",
    },
    {
      id: 8,
      link: "/girl-prompt",
      image: "/girls-image/girl-5.png",
      alt: "Girl Image 3",
    },
    {
      id: 9,
      link: "/couple-prompt",
      image: "/couple-image/couple-1.png",
      alt: "couple Image 8",
    },

    {
      id: 10,
      link: "/family-prompt",
      image: "/family-images/family-3.png",
      alt: "Family Image 2",
    },
    {
      id: 11,
      link: "/festival-prompt",
      image: "/festival-image/festival-1.png",
      alt: "Festival Image 8",
    },
  ];

  return (
    <div className="my-10 mx-2 cursor-pointer md:mx-60">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
        Explore <span className="text-pink-600">Latest</span> Prompts
      </h1>

      <Marquee pauseOnHover={true} speed={80}>
        {images.map((item) => (
          <Link key={item.id} href={item.link}>
            <img
              src={item.image}
              alt={item.alt}
              className="md:h-68 h-60 object-cover md:w-[200px] w-[100px] mx-2 rounded-lg"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default SliderComponent;
