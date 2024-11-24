import React from "react";
import Card from "./Card";
import VitaminC from "@/public/images/vitac.jpg";
import VitaminB3 from '@/public/images/vitab3.jpg'
import VitaminMg from '@/public/images/vitamg.jpg'
import VitaminHy from '@/public/images/vitahy.jpg'
import VitaminLa from '@/public/images/vitala.jpg'

const Ingredients = () => {
  return (
    <section className="h-96 md:px-16 px-6 py-16 w-full md:mt-64 mt-[74rem] flex flex-wrap gap-8">
      {/* header */}
      <div className="w-[26rem]">
        <h4 className="text-lg uppercase font-semibold text-[#17414F]">
          ingredients
        </h4>
        <h2 className="text-5xl font-bold capitalize text-[#17414F] mt-1">
          Better ingredients
        </h2>
        <p className="text-sm text-[#727272] mt-6">
          Only the best when you choose products offered on our platform
          high-quality ingredients for high quality products!
        </p>
      </div>

      {/* cards */}
      <Card
        imageSrc={VitaminC}
        title="Vitamin c"
        description="Vitamin C as ascorbic acid"
      />
      <Card
        imageSrc={VitaminB3}
        title="Vitamin b3"
        description="Niacin for healthy gut and skin"
      />
      <Card
        imageSrc={VitaminMg}
        title="Magnesium"
        description="Boost energy and support muscle function"
      />
      <Card
        imageSrc={VitaminHy}
        title="Hyaluronic Acid"
        description="For smooth, supple and soft skin!"
      />
      <Card
        imageSrc={VitaminLa}
        title="Lactobacillus"
        description="Invigorate your gut microbiome"
      />

      <div className="flex-col py-6 hidden md:block">
           <div className="h-16 w-16 rounded-br-full bg-sky-300"></div>
           <div className="h-16 w-16 rounded-full bg-yellow-400 mt-8"></div>
      </div>
    </section>
  );
};

export default Ingredients;
