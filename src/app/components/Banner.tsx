import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r first-line:black-to-grey-700 font-sans px-6 py-12  mb-7">
   
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://www.shutterstock.com/image-vector/pepperoni-pizza-banner-ads-on-260nw-1505158397.jpg"
          alt="delicious pizza banner"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center ">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white  text-lg  text-center mb-6  max-w-xl ">
          Available Exlcusive Discount
        </p>
        <button className=" bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-500 transition duration-300">
          Exciting Deals Launch at 12AM !
        </button>
      </div>
    </div>
  );
}
