import React from 'react';
import { CiSearch } from "react-icons/ci";
import Logo from "../../Assets/Vector.png";


const Navbar = () => (
  <nav className="w-full h-24 flex items-center justify-between px-8 bg-white border-b border-gray-200">
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="w-10 ml-10" />
    </div>
    <ul className="flex justify-center items-center gap-6 text-gray-700">
      <li><a href="#" className="text-black">Learn </a></li>
      <li><a href="#" className="text-black">How do I participate? </a></li>
      <li><a href="#" className="text-black">Universities </a></li>
      <li><a href="#" className="text-black">Corporate</a></li>
      
    </ul>
    <div className="relative flex items-center">
      <button className="flex items-center">
        <div className="h-14 w-14 flex justify-center items-center border-[10px] border-slate-900 bg-white rounded-full absolute -left-20 ml-7">
        <CiSearch />
        </div>  
        <div className="h-14 w-52 flex justify-center items-center bg-slate-900 text-white text-m px-10 rounded-full pl-12 mr-12">
          Join Program
        </div>
      </button>
    </div>
  </nav>
);

export default Navbar;
