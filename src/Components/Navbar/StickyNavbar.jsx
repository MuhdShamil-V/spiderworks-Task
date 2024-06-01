import React from "react";
import { IoMdMenu } from "react-icons/io";
import { RiMessageLine } from "react-icons/ri";
import Logo from "../../Assets/Vector.png";
import { CiSearch } from "react-icons/ci";

function StickyNavbar() {
  return (
    <div className="flex justify-center items-center h-16 bg-white">
      <div className="flex h-16 w-[700px] bg-slate-700 justify-between items-center gap-6 rounded-md px-4">
        <div className="flex items-center">
          <img className="h-10" src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-6 items-center">
          <div className="h-9 w-24 flex justify-center items-center bg-black text-white text-sm rounded-full">
            <div className="pr-2">
              <IoMdMenu />
            </div>
            Menu
          </div>
          <div className="relative h-9 w-32 flex justify-center items-center bg-gradient-to-r from-blue-500 to-rose-600 text-black text-sm rounded-full">
            <div className="absolute inset-[2px] bg-white rounded-full flex justify-center items-center">
              <RiMessageLine />
              <span className="ml-2">Discuss CPT</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="flex items-center">
            <div className="h-10 w-10 flex justify-center items-center border-[5px] border-black bg-white rounded-full p-0">
              <CiSearch />
            </div>
            <div className="h-10 w-36 flex justify-center items-center bg-black text-white text-xs rounded-full p-0 ml-[-1px]">
              Join Program
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyNavbar;
