
 import React from "react";
 import Image from "next/image";

export default function Carousel() {
  return (
  
      <div>

    
      <section className="bg gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto mx-w-screen-xl sm:py4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/carpizza1.webp"
                  alt="pizza 1"
                  width={150}
                  height={150}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                  vegetable pizza {""}
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradiant-to-r from-black to-gray-700 h-auto md:h-full flex flex-col ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="/images/carpizza2.webp"
                  alt="pizza 2"
                  width={150}
                  height={150}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 
                xs:text-xl md:text-0xl">
                  {" "}
                  Pepproni pizza {""}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/carpizza3.webp"
                    alt="pizza 3"
                    height={150}
                    width={150}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 "></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {" "}
                 BBQ pizza {""}
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/carpizza4.webp"
                    alt="pizza 4"
                    height={150}
                    width={150}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 "></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {" "}
                   Hawaiian pizza {""}
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradiant-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                
              >

<Image src="/images/carpizza5.webp" 
alt="pizza 5"
height={150}
width={150}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 "></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                 Supreme  pizza {""}
                </h3>
                
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


