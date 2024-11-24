import React from "react";
import Image from "next/image";
import Medicine from "@/public/images/medicine.png";
import { GiMedicines } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";

const Banner = () => {
  return (
    <div className="md:h-screen bg-[#E2F5FB] md:pt-24 pt-28 flex flex-col justify-center items-center">
      {/* heading */}
      <h1 className="md:text-8xl text-center text-6xl capitalize text-[#003569] font-bold">
        essential vitamins
      </h1>

      {/* Banner */}
      <section className="md:flex flex-row justify-center items-center gap-24 mt-8">
        
        <div className="mt-20 hidden md:block">
          <p className="text-[#003569]">Online Medical Supplies</p>
          <h4 className="text-2xl text-[#003569] font-bold mt-1">
            Get Your Vitamins <br /> & Minerals
          </h4>
          <button className="px-6 py-2 rounded-3xl bg-[#17414F] hover:bg-[#225d71] text-white font-semibold mt-2 transition-all duration-300">
            Explore
          </button>
        </div>

        {/* image */}
        <div className="mt-6 md:mt-0 md:h-[320px] h-[200px] md:w-[360px] w-[250px] bg-[#FFE9B5] rounded-tl-[100px] rounded-br-[100px] relative">
          <div className="absolute -top-14 right-4">
            <Image src={Medicine} alt="mecine image" className="md:w-[760px] w-[800px]" />
          </div>
        </div>

        {/* info list */}
        <div className="mt-6 md:mt-0 flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-[#17414F] rounded-full flex justify-center items-center text-xl text-white">
              <GiMedicines />
            </div>

            <div>
              <h4 className="text-lg text-[#17414F] font-bold">Vitamins</h4>
              <p className="text-[#17414F] text-sm">
                Increased Vitamins and <br /> minerals in your diet
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-[#17414F] rounded-full flex justify-center items-center text-xl text-white">
              <FaWeight />
            </div>
            <div>
              <h4 className="text-lg text-[#17414F] font-bold capitalize">
                Weight loss
              </h4>
              <p className="text-[#17414F] text-sm">
                Weight Loss Find scientifically <br /> proven solutions
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-[#17414F] rounded-full flex justify-center items-center text-xl text-white">
              <MdOutlineEmojiFoodBeverage />
            </div>

            <div>
              <h4 className="text-lg text-[#17414F] font-bold capitalize">
                Functional Foods
              </h4>
              <p className="text-[#17414F] text-sm">
                Functional Foods From protein <br /> powers to baby formula
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 block md:hidden">
          <p className="text-[#003569]">Online Medical Supplies</p>
          <h4 className="text-2xl text-[#003569] font-bold mt-1">
            Get Your Vitamins <br /> & Minerals
          </h4>
          <button className="px-6 py-2 rounded-3xl bg-[#17414F] text-white font-semibold mt-2">
            Explore
          </button>
        </div>

      </section>
    </div>
  );
};

export default Banner;
