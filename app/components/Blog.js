import React from "react";
import BlogCard from "./BlogCard";
import BlogCard2 from "./BlogCard2";
import BlogImg1 from "@/public/images/blog.png";
import BlogImg2 from "@/public/images/blog2.jpg";

const Blog = () => {
  return (
    <scetion className="w-full md:mt-32 mt-[64rem] py-10 flex flex-col justify-center items-center">
      {/* blog heading */}
      <div className="text-center">
        <h5 className="text-lg uppercase text-[#17414F] font-semibold">
          Our blog
        </h5>
        <h2 className="text-4xl uppercase text-[#17414F] font-bold">
          latest news
        </h2>
      </div>

      {/* blog section */}
      <div className="mt-12 flex justify-center flex-wrap gap-4">
        <div className="flex flex-col gap-4">
          <BlogCard
            imageSrc={BlogImg1}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="23 Nov"
          />

          <BlogCard2
            imageSrc={BlogImg2}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="22 Nov"
          />
        </div>

        <div className="flex flex-col gap-4">
          <BlogCard2
            imageSrc={BlogImg2}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="22 Nov"
          />

          <BlogCard
            imageSrc={BlogImg1}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="23 Nov"
          />
        </div>

        <div className="flex flex-col gap-4">
          <BlogCard
            imageSrc={BlogImg1}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="23 Nov"
          />

          <BlogCard2
            imageSrc={BlogImg2}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="22 Nov"
          />
        </div>

        <div className="flex flex-col gap-4">
          <BlogCard2
            imageSrc={BlogImg2}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="22 Nov"
          />

          <BlogCard
            imageSrc={BlogImg1}
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="23 Nov"
          />
        </div>

      </div>
    </scetion>
  );
};

export default Blog;
