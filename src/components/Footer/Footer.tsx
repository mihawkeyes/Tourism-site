import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-[100%] bg-[#001A1A] p-2 ">
      <div className="sm:flex sm:w-[70%]  sm:relative sm:left-[15%] sm:right-[15%]">
        <Image
          src="/AlohaLight.png"
          alt="AlohaLight"
          width={80}
          height={40}
          className="p-2 w-[80px] h-[40px] cursor-pointer "
        />
      </div>
    </footer>
  );
};

export default Footer;
