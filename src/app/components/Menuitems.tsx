import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const productCardGrid = () => {
  const productImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsc8Rlhn_ZrCdW9lD66aKjjKBC_Eko8ZdRQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLOcb97AFCLXS9n5PhVWuLjp596cUzF505Q&s",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpAwL5IE5p1pxMFjJGnj-C3rjFvezw96SlCJU11aFNBxQ7p5sCed074I&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb-QOETAw_2smnhPtCqsh8A1KTeBnpYEBTQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Aqy7kjjQbxmABSduzIg3uyh_TOOS0_GPGA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9S8G-FFE2i6Z3CEfxjOoa9jlrL3X5Ex3yA&s",
  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1O2F91QpeCoibFkxWj3XSzLO8ZUaBPR_hgcvb1bFysywAS5iAd_puFRY&s')`,
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
