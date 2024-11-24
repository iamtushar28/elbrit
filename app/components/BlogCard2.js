import React from "react";
import Image from "next/image";

const BlogCard2 = ({ imageSrc, title, date }) => {
  return (
    <div className="relative">
      {/* blog card image */}
      <Image
        src={imageSrc}
        alt="blog image"
        className="rounded-2xl w-[20rem] h-56 md:w-[270px] md:h-[220px] "
      />

      <div className="absolute z-10 top-24 left-8 right-0 w-[200px]">
        <h2 className="text-xl text-white font-semibold capitalize">{title}</h2>
      </div>

      <div className="px-4 py-2 w-fit capitalize text-white bg-[#003569] rounded-r-3xl absolute top-6 -left-2">
        {date}
      </div>
    </div>
  );
};

export default BlogCard2;
