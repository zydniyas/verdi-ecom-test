import { Carousel, Flowbite } from "flowbite-react";
import React from "react";
const customTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth", // Removed 'rounded-lg'
    },
  },
};

function Banner() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="">
        <Carousel className="overflow-hidden h-[580px]">
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://oldskool-html-bootstrap.vercel.app/assets/images/banners/banner-4.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="opacity-20 absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="relative z-10">
              <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Better Data
                </span>{" "}
                Scalable AI.
              </h1>
              <p className="text-lg font-normallg:text-xl text-white">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://oldskool-html-bootstrap.vercel.app/assets/images/banners/banner-3.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="opacity-30 absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative z-10">
              <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#c8ffb4] from-sky-400">
                  Better Data
                </span>{" "}
                Scalable AI.
              </h1>
              <p className="text-lg font-normallg:text-xl text-white">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-[url('https://oldskool-html-bootstrap.vercel.app/assets/images/banners/banner-2.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="opacity-30 absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative z-10">
              <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#c8ffb4] from-sky-400">
                  Better Data
                </span>{" "}
                Scalable AI.
              </h1>
              <p className="text-lg font-normallg:text-xl text-white">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </Flowbite>
  );
}

export default Banner;
