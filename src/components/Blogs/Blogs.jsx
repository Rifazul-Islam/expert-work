"use client";
import { useState } from "react";

function Blogs() {
  const blogs = [
    {
      id: 1,
      image: "/blog-images/blogs1.png",
      para: "Create a photo-realistic 8K full-body portrait of a confident man leaning casually against a clean light-gray wall, hands in his pockets and one leg crossed over the other, exuding a relaxed yet self-assured presence. The lighting should be bright, even, and professional, reflecting a clean modern studio environment. On the wall beside him, feature a bold black-and-white stylized vector portrait of the same man with sleek geometric shapes and modern design elements. Beneath the vector artwork, place the text 'Expert Work' in large, clean bold letters, and below that, write “Facebook: expertWork” in a smaller minimalist font. The overall aesthetic should be modern, minimalistic, and premium — ideal for personal branding with a creative, tech-inspired edge.",
    },
    {
      id: 2,
      image: "/blog-images/Gemini_Generated.png",
      para: " A photorealistic, sun-drenched lifestyle photograph of a stylish handsome and athletic young man, 24 year old, in last 24s with stylish brown hair and well groomed beard. He is captured mid-action in a crystal-clear swimming pool, looking intensely andconfidently at the camera as he runs a hand through his hair.Dynamic splashes of water freeze in the air around him, glistening under the bright direct sunlight",
    },
    {
      id: 3,
      image: "/blog-images/blog-3.png",
      para: "Create a photo-realistic, Indian man standing on a wet road in light rain, holding a transparent umbrella in his right hand. He is wearing a white, black checked shirt, sleeves rolled up, black slim-fit jeans, and white chunky sneakers. His head is slightly lowered, smiling subtly. His left hand is in his pocket with a white watch, and his right leg is in a playful kicking pose, best to move forward. The road is shiny in the rain, the green trees in the background are blurred.",
    },
    {
      id: 4,
      image: "/blog-images/blog-4.png",
      para: " A clear, medium-sized image shows a man sitting comfortably on a white horse, one hand on the handlebars and leaning back slightly, looking up at the sky with a relaxed, contented smile, over a mountainside of grass swaying in the wind under a cloudy sky. His hair is gently tousled in the wind. He is wearing a textured, light gray knit sweater and light-colored trousers, the fabric naturally pleated. The background is softly blurred, showing the muted greens and browns of distant mountains and a soft, cloudy sky, emphasizing him in a moment of tranquility. The foreground is filled with tall, dry grass and reeds, blurred to create depth. The overall mood is one of peaceful reflection, freedom, and quiet contentment.",
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
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
                className="w-[500px] lg:h-[470px] h-[570px] mx-auto mt-2 rounded-lg"
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
