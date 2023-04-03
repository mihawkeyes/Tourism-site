import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navbarToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav className={`${styles.navbar} shadow border-[#008080] border`}>
        <Link href="/">
          <Image
            src="/Aloha.png"
            alt="Aloha"
            width={80}
            height={40}
            className="p-2 w-[80px] h-[40px] cursor-pointer"
          />
        </Link>

        <div className="flex-grow pl-10 h-[90%] md:pl-5 sm:pl-1 ">
          <ul className="flex flex-row flex-shrink gap-10 text-[14px] h-[100%] items-center md:gap-5 sm:gap-2 sm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.9rem]">
            <li className="cursor-pointer px-3 text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer px-3 text-black">
              <Link href={{ pathname: "/activity/Surfing" }}>Surfing</Link>
            </li>
            <li className="cursor-pointer px-3 text-black">
              <Link href="/activity/Traditional Festivals">Hula</Link>
            </li>
            <li className="cursor-pointer px-3 text-black">
              <Link href="/activity/Volcanoes">Vulcano</Link>
            </li>
          </ul>
        </div>
        <button
          className={`${styles.bookbutton}  md:text-[0.7rem] sm:text-[0.65rem] lg:text-[0.9rem] shadow border hover:scale-105 active:scale-95`}
        >
          Book a trip
        </button>
      </nav>
      <nav className={`px-5 ${styles.mobilenavbar}`}>
        <Link href="/">
        <Image
          src="/Aloha.png"
          alt="Aloha"
          width={80}
          height={40}
          className="p-2 w-[80px] h-[40px] cursor-pointer"
        />
        </Link>
        <div
          className=" space-y-1 px-5 py-2.5 cursor-pointer"
          onClick={navbarToggle}
        >
          <span className="block h-[2px] w-7 border-gray-600 border-2 rounded-sm animate-pulse "></span>
          <span className="block h-[2px] w-7 border-gray-600 border-2 rounded-sm animate-pulse "></span>
          <span className="block h-[2px] w-7 border-gray-600 border-2 rounded-sm animate-pulse "></span>
        </div>
      </nav>

      <div
        className={`${styles.backdrop} backdrop-opacity-80 backdrop-sepia ${
          !navOpen && "hidden"
        }`}
        onClick={navbarToggle}
      ></div>
      <nav
        className={`${styles.navbarcontainer} ${
          navOpen ? styles.open : styles.close
        }`}
        onClick={navbarToggle}
      >
        <div className="flex w-[100%] flex-col">
          <div
            className="h-[50px] flex justify-end w-[100%] items-center cursor-pointer p-3"
            onClick={navbarToggle}
          >
            <Link href="/">
              <Image
                src="/Aloha.png"
                alt="Aloha"
                width={80}
                height={40}
                className="p-2 w-[80px] h-[40px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="p-3">
            <ul className="flex flex-col gap-10 text-[14px] h-[100%] items-start ">
              <li className="cursor-pointer px-3 text-xl text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer px-3 text-xl text-black">
                <Link href="/activity/Surfing">Surfing</Link>
              </li>
              <li className="cursor-pointer px-3 text-xl text-black">
                <Link href="/activity/Traditional Festivals">Hula</Link>
              </li>
              <li className="cursor-pointer px-3 text-xl text-black">
                <Link href="/activity/Volcanoes">Vulcano</Link>
              </li>
              <li className="cursor-pointer px-3 ">
                <button
                  className={`${styles.bookbutton} hover:scale-105 active:scale-95`}
                >
                  Book a trip
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
