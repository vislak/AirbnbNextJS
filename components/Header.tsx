import React from "react";
import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import Banner from "./Banner";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white-100 shadow p-1 md:px-5 h-16 items-center ">
      <div className="relative flex items-center h-8 overflow-hidden cursor-pointer ">
        {/* logo */}

        <Image
          src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg"
          objectFit="contain"
          objectPosition="left"
          width={150}
          height={100}
          alt = "logo"
        />
      </div>

      <div className="flex items-center md:border-2 py-2 rounded-full">
        {/* Search */}
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Your search"
        />
        <SearchIcon className=" mx-auto hidden md:inline-flex h-8  text-white bg-red-400 rounded-full md:mx-2 " />
      </div>

      <div className="flex space-x-4 justify-end items-center text-gray-500">
        
       <p className="hidden  lg:inline-flex">Become a host</p>
       <GlobeAltIcon className="h-6 cursor-pointer"/>
       <div className="flex rounded-full p-2  ">
        <MenuIcon className="h-6 cursor-pointer"/>
        <UserCircleIcon className="h-6 cursor-pointer" />

       </div>




        
      </div>
    </header>
  );
}
