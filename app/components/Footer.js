import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="h-fit w-full pt-10 pb-6 bg-[#17414F]">
      {/* contact cards */}
      <div className="flex flex-wrap justify-center md:gap-16 gap-4">
        {/* phone card */}
        <div className="h-20 md:w-[16rem] w-72 bg-[#215D72] rounded-lg flex gap-4 justify-start md:justify-center px-10 md:px-0 items-center">
          {/* icon */}
          <div className="text-3xl text-white">
            <IoPhonePortraitOutline />
          </div>

          <div>
            <h4 className="text-white capitalize">phone number</h4>
            <h4 className="text-white font-medium">+974 3118 1843</h4>
          </div>
        </div>

        {/* email adress card */}
        <div className="h-20 w-72 bg-[#215D72] rounded-lg flex gap-4 justify-center items-center">
          {/* icon */}
          <div className="text-3xl text-white">
            <BiLogoGmail />
          </div>

          <div>
            <h4 className="text-white capitalize">email adress</h4>
            <h4 className="text-white font-medium">Elbrithcqhr@gmail.com</h4>
          </div>
        </div>

        {/* office location card */}
        <div className="h-20 w-72 bg-[#215D72] rounded-lg flex gap-4 justify-center items-center">
          {/* icon */}
          <div className="text-3xl text-white">
            <TiLocation />
          </div>

          <div>
            <h4 className="text-white capitalize">office location</h4>
            <h4 className="text-white font-medium">
              Ambassador Street, Zone 61,
            </h4>
          </div>
        </div>
      </div>

      {/* company logo/details */}
      <div className="flex flex-wrap md:gap-20 gap-4 md:px-40 px-4 md:mt-16 mt-8">
        {/* company logo image */}
        <div className="bg-white w-fit p-3">
          <Image src={Logo} alt="ELBRIT logo image" className="h-12" />
        </div>

        <p className="text-white w-[24rem] text-sm text-justify">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>

{/* copyright tag */}
<div className="md:px-36 px-4 mt-6">
<p className="text-white text-sm">&copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051

</p>
</div>
    </footer>
  );
};

export default Footer;
