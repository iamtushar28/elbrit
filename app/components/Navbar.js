import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="h-24 md:px-10 px-2 flex justify-between items-center fixed top-0 left-0 right-0 z-40 bg-[#E2F5FB] shadow">
      <Image src={Logo} alt="ELBRIT logo image" className="w-48" />

      <div className="flex items-center gap-6">
        <div>
          {/* search button */}
          <button className="text-2xl h-10 text-[#17414F] ">
            <RiSearchLine />
          </button>
        </div>

        {/* menu button */}
        <button className="text-2xl text-[#17414F]">
          <HiOutlineMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
