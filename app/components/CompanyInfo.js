import React from "react";
import { SlChemistry } from "react-icons/sl";
import { PiPlantBold } from "react-icons/pi";
import { GiIndiaGate } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { PiPottedPlantBold } from "react-icons/pi";

export const CompanyInfo = () => {
  return (
    <section className="md:px-20 md:pt-28 pt-24 w-full h-96 bg-[#E2F5FB]">
      <div className="md:h-[32rem] h-[94rem] px-12 w-full bg-[#17414F] md:rounded-[3rem] relative">
        <div className="absolute -top-16 left-0 right-0">
          {/* row 1 */}
          <div className="flex flex-wrap gap-10 md:gap-0 justify-around">
            {/* info 1 */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* icon */}
              <div className="h-28 w-28 text-5xl text-[#17414F] bg-white rounded-full flex justify-center items-center">
                <SlChemistry />
              </div>
              <div className="w-56">
                <h4 className="text-2xl text-white font-semibold capitalize text-center">
                  Cliniclly studied
                </h4>
                <p className="text-[#D9D9D9] text-sm text-center mt-4">
                  All products that we offer have undergone lab and safety tests
                </p>
              </div>
            </div>

            {/* info 2 */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* icon */}
              <div className="h-28 w-28 text-5xl text-[#17414F] bg-white rounded-full flex justify-center items-center">
                <PiPlantBold />
              </div>
              <div className="w-56">
                <h4 className="text-2xl text-white font-semibold capitalize text-center">
                  Vegetarian Friendly
                </h4>
                <p className="text-[#D9D9D9] text-sm text-center mt-4">
                  We have a wide selection of vegetarian products to meet your
                  needs
                </p>
              </div>
            </div>

            {/* info 3 */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* icon */}
              <div className="h-28 w-28 text-5xl text-[#17414F] bg-white rounded-full flex justify-center items-center">
                <GiIndiaGate />
              </div>
              <div className="w-56">
                <h4 className="text-2xl text-white font-semibold capitalize text-center">
                  Made in India
                </h4>
                <p className="text-[#D9D9D9] text-sm text-center mt-4">
                  Shop local and explore health products made right here in
                  India
                </p>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="flex flex-wrap gap-10 md:gap-0 justify-around md:mt-16 mt-10">
            {/* info 1 */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* icon */}
              <div className="h-28 w-28 text-5xl text-[#17414F] bg-white rounded-full flex justify-center items-center">
                <FaShippingFast />
              </div>
              <div className="w-56">
                <h4 className="text-2xl text-white font-semibold capitalize text-center">
                Free shipping
                </h4>
                <p className="text-[#D9D9D9] text-sm text-center mt-4">
                We deliver to your door with no shipping costs on your orders
                </p>
              </div>
            </div>

            {/* info 2 */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* icon */}
              <div className="h-28 w-28 text-5xl text-[#17414F] bg-white rounded-full flex justify-center items-center">
                <FaBoxOpen />
              </div>
              <div className="w-56">
                <h4 className="text-2xl text-white font-semibold capitalize text-center">
                No Risk
                </h4>
                <p className="text-[#D9D9D9] text-sm text-center mt-4">
                We ensure that all products are safe and within their use-by date
                </p>
              </div>
            </div>

            {/* info 3 */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* icon */}
              <div className="h-28 w-28 text-5xl text-[#17414F] bg-white rounded-full flex justify-center items-center">
                <PiPottedPlantBold />
              </div>
              <div className="w-56">
                <h4 className="text-2xl text-white font-semibold capitalize text-center">
                GMO free
                </h4>
                <p className="text-[#D9D9D9] text-sm text-center mt-4">
                Natural, no modified products and derivatives for those who need it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
