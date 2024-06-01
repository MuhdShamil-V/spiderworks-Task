import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { HiArrowLongDown } from "react-icons/hi2";
import { RiMessageLine } from "react-icons/ri";

function Home() {
  return (
    <div>
      <div className="ml-12 mt-5 text-xs text-gray-500">
        <p>Home/Forum</p>
      </div>
      <div>
        <div className="flex justify-center text-sm mt-8">
          <p>FORUM</p>
        </div>
        <div className="flex justify-center items-center pt-3">
          <p class="font-serif text-5xl">Discuss & Evolve</p>
        </div>
        <div className="flex justify-center font-serif text-gray-500 text-md pt-5">
          <p>
            Engage with Fellow Proffessionals: Join the Program Forum
            Discussion!
          </p>
        </div>
        <div className="flex justify-center pt-5">
          <div className="relative w-2/6">
            <input
              type="text"
              placeholder="Search Topics"
              className="text-black w-full h-16 rounded-full pl-4 pr-10 overflow-hidden border-2 border-black"
            />
            <CiSearch className="h-10 w-10 p-2 flex justify-center items-center bg-slate-900 rounded-full text-white absolute right-5 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex justify-center pt-5 mr-40 mt-5 ml-28">
          <div className="flex justify-center items-center bg-red-50 rounded-3xl text-red-700 w-14 h-10">
            <RiMessageLine />
          </div>
          <div className="flex pl-4 mt-2 text-gray-600">
            <p className="font-semibold">START DISCUSSING</p>
          </div>
          <div className="flex justify-center items-center text-cyan-600 bg-sky-200 rounded-3xl text-lg w-14 h-10 ml-14">
            <AiOutlineBulb />
          </div>
          <div className="flex pl-4 mt-2 text-gray-600">
            <p className="font-semibold">VIEW TOPICS</p>
          </div>
        </div>
        <div className="flex justify-center text-black text-5xl">
          <HiArrowLongDown />
        </div>  
      </div>
    </div>
  );
}

export default Home;
