import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const productCardGrid = () => {
  const productImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
  ];
  return (
    <div className="relative text-center p-10 bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/menuitems.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items{" "}
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now....!</h1>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <Image
                src={productImages[index]}
                alt={`product ${index + 1}`}
                height={400}
                width={400}
                className="h-80 w-75 object-cover rounded-t-xl"
              />
              <div className="p-4 py-3 w-72">
                <span className=" text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  {`pizza  ${index + 1}`}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $149
                  </p>
                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      {""} $149
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default productCardGrid;
