import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src={
          "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        layout="fill"
        objectFit="cover"
        alt="image"
      />

        <div className="absolute top-1/2 w-full text-center">
            <p className=" text-xl md:text-4xl  text-white font-semibold ">Not sure where to go? Perfect</p>
            <button className="text-purple-500 font-bold bg-white px-10 py-4 shadow-sm my-4 hover:shadow-xl active:scale-90 rounded-full
             transition duration-150">
                I am flexible</button>
        </div>

    </div>
  );
}
