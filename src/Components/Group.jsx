import React from "react";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/image6.png";
import image7 from "../Assets/image7.png";
import image8 from "../Assets/image8.png";
import '../Components/Group.css';

function Group() {
  return (
    <div className="flex justify-center relative items-center flex-wrap mb-10">
      <div className="ml-[-55px] mt-72">
        <img src={image1} alt="image-1" className="w-40 h-40 rounded-full bg-pink-100 pl-4 pr-3 pt-2" />
      </div>
      <div className="ml-[-40px] mt-32">
        <img src={image2} alt="image-2" className="w-52 h-52 rounded-full bg-sky-200 pl-1 pr-1 pt-2 border-[10px] border-white" />
      </div>
      <div className="ml-28 mb-44">
        <img src={image3} alt="image-3" className="w-44 h-44 rounded-full bg-purple-400 pt-3 pl-2 pr-2 pt-5" />
      </div>
      <div className="ml-[-35px] mt-52 mr-20">
        <img src={image4} alt="image-4" className="w-44 h-44 rounded-full bg-yellow-100" />
      </div>
      <div className="m-4">
        <img src={image5} alt="image-5" className="w-44 h-44 rounded-full bg-violet-300" />
      </div>
      <div className="ml-[-50px] mt-28">
        <img src={image6} alt="image-6" className="w-52 h-52 rounded-full bg-amber-400 p-5 pb-0 pt-6 border-[10px] border-white" />
      </div>
      <div className="mb-44 ">
        <img src={image7} alt="image-7" className="w-44 h-44 rounded-full bg-lime-200 p-3 pt-7 pl-4 pr-4 pb-0" />
      </div>
      <div className="m-4">
        <img src={image8} alt="image-8" className="w-40 h-40 rounded-full bg-sky-300 pr-3" />
      </div>
      
    </div>
    
  );
}

export default Group;
