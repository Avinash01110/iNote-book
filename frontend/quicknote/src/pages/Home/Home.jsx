import React from "react";
import banner from "../../assets/video/banner.mp4";
import { FaArrowRight } from "react-icons/fa6";
import noteImage1 from "../../assets/images/note-image1.webp";
import noteImage2 from "../../assets/images/note-image2.webp";
import noteImage3 from "../../assets/images/note-image3.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mx-auto min-h-screen">
        <div className="h-[130vh] bg-cream w-full flex justify-center items-center relative">
          <video
            className="h-full w-full object-cover"
            src={banner}
            alt="banner video"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute mb-32 flex flex-col items-center justify-center">
            <span className="font-rubik text-3xl sm:text-5xl text-white">
              Better tools.
            </span>
            <span className="font-rubik text-3xl sm:text-5xl text-white">Better work.</span>
            <span className="font-rubik text-3xl sm:text-5xl text-white">
              Better tomorrow.
            </span>
          </div>

          <Link to={"/login"}>
            <div className="group border border-solid border-white flex flex-row gap-6 items-center justify-center rounded-full px-8 py-4 sm:px-10 sm:py-6 absolute bottom-[12%] left-[8%] overflow-hidden">
              <div className="w-96 h-96 bg-text-300 absolute -translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out cursor-pointer"></div>
              <button className="font-rubik text-xl sm:text-2xl text-white z-10 font-extralight">
                Let's Start
              </button>
              <FaArrowRight className="text-white text-xl sm:text-2xl group-hover:-rotate-45 transition-all duration-500 ease-in-out" />
            </div>
          </Link>
        </div>

        <div className="h-auto w-full bg-cream flex flex-col gap-10 items-center sm:px-4 py-16">
          <div className="w-full md:w-[45rem] lg:w-[50rem] xl:w-[60rem] 2xl:w-[65rem] text-3xl lg:text-5xl px-10 md:px-0 text-text-300 font-serif text-justify">
            The truth is that great, world-shaping ideas can come from
            everywhere. From anyone. At any time.{" "}
          </div>
          <div className="flex flex-col xl:flex-row px-10 sm:px-16 md:px-20 lg:px-28 xl:px-0">
            <div className="group xl:h-[35rem] flex justify-center items-center xl:w-96 bg-blue-300 border border-solid border-text-300 overflow-hidden cursor-pointer relative">
              <img
                className="h-full w-full object-cover group-hover:scale-110 transition ease-in-out duration-500"
                src={noteImage1}
                alt="noteImage"
              />
              <div className="group border border-solid border-white flex flex-row gap-6 items-center justify-center rounded-full px-6 py-4 absolute overflow-hidden">
                <div className="w-96 h-96 bg-blue-700 absolute -translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out cursor-pointer"></div>
                <button className="font-rubik text-xl text-white z-10 font-extralight">
                  Create
                </button>
                <FaArrowRight className="text-white text-2xl group-hover:-rotate-45 transition-all duration-500 ease-in-out" />
              </div>
            </div>
            <div className="group xl:h-[35rem] flex justify-center items-center xl:w-96 bg-blue-300 border border-solid border-text-300 overflow-hidden cursor-pointer relative">
              <img
                className="h-full w-full object-cover group-hover:scale-110 transition ease-in-out duration-500"
                src={noteImage2}
                alt="noteImage"
              />
              <div className="group border border-solid border-white flex flex-row gap-6 items-center justify-center rounded-full px-6 py-4 absolute overflow-hidden">
                <div className="w-96 h-96 bg-blue-700 absolute -translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out cursor-pointer"></div>
                <button className="font-rubik text-xl text-white z-10 font-extralight">
                  Update
                </button>
                <FaArrowRight className="text-white text-2xl group-hover:-rotate-45 transition-all duration-500 ease-in-out" />
              </div>
            </div>
            <div className="group xl:h-[35rem] flex justify-center items-center xl:w-96 bg-blue-300 border border-solid border-text-300 overflow-hidden cursor-pointer relative">
              <img
                className="h-full w-full object-cover group-hover:scale-110 transition ease-in-out duration-500"
                src={noteImage3}
                alt="noteImage"
              />
              <div className="group border border-solid border-white flex flex-row gap-6 items-center justify-center rounded-full px-6 py-4 absolute overflow-hidden">
                <div className="w-96 h-96 bg-blue-700 absolute -translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out cursor-pointer"></div>
                <button className="font-rubik text-xl text-white z-10 font-extralight">
                  Delete
                </button>
                <FaArrowRight className="text-white text-2xl group-hover:-rotate-45 transition-all duration-500 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
