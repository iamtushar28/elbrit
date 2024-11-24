import React from "react";
import Image from "next/image";

// You can keep the default props for the image as optional
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="relative">
      {/* Card image */}
      <Image src={imageSrc} alt={title} className="h-48 w-[20rem] rounded-xl" />

      <div className="absolute z-10 top-4 left-4">
        {/* Card heading */}
        <h2 className="text-2xl font-semibold text-[#17414F] capitalize">
          {title}
        </h2>

        {/* Card description */}
        <p className="text-sm text-[#727272]">{description}</p>

        {/* See more button */}
        <button className="text-[#17414F] hover:text-[#30839f] underline uppercase font-semibold transition-all duration-300 absolute -bottom-28">
          see more
        </button>
      </div>
    </div>
  );
};

export default Card;
