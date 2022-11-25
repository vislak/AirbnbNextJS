import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow p-1 md:px-10 h-16 items-center ">
      <div className="relative flex items-center h-8 overflow-hidden">
        {/* logo */}

        <Image
          src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg"
          objectFit="contain"
          objectPosition="left"
          width={150}
          height={100}
        />
      </div>

      <div className=" flex flex-row items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md w-fit p-1 h-10">
        {/* Search */}
        <input
          className="mx-2 flex-grow bg-transparent outline-none"
          type="text"
          placeholder="Start Your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 w-auto text-white bg-red-400 rounded-full cursor-pointer p-2" />
      </div>

      <div className="flex">
        <div className="hover:rounder-full">
          <span>Airbnb your home</span>
        </div>

        <i>Globe</i>

        <div className="flex">
          <div> Menu</div>
          
          <div>Profile Pic</div>
        </div>



      </div>
    </header>
  );
}
