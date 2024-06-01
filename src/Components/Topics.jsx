import React from "react";
import { RiMessageLine } from "react-icons/ri";

const topics = [
  "Eligibility",
  "F1 Visa Students",
  "Universities",
  "Admission",
  "Companies",
  "Jobs",
];

const Topics = () => {
  return (
    <div className="w-full h-screen bg-pink-50 flex flex-col items-center justify-center p-8">
        <h3 className="text-sm mb-4">TOPICS</h3>
      <h2 className="text-4xl font-serif mb-8">
        Most Searched <em>Ones</em>
      </h2>
      <div>
    <div className="flex justify-center gap-6 mb-6">
      <div className="w-80 h-32 bg-gradient-to-r from-red-900 via-violet-950 to-blue-950 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <p className="font-serif text-2xl">Elibility</p>
      </div>
      <div className="w-80 h-32 bg-slate-900 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <p className="font-serif text-2xl">F1 Visa Students</p>
      </div>
      <div className="w-80 h-32 bg-slate-900 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <p className="font-serif text-2xl">Universities</p>
      </div>
    </div>
    <div className="flex justify-center gap-6">
    <div className="w-80 h-32 bg-slate-900 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <p className="font-serif text-2xl">Admission</p>
      </div>
      <div className="w-80 h-32 bg-slate-900 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <p className="font-serif text-2xl">Companies</p>
      </div>
      <div className="w-80 h-32 bg-slate-900 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <p className="font-serif text-2xl">Jobs</p>
      </div>
      </div>
    </div>
      <div className="flex mt-14 text-center">
        <p className="font-semibold text-slate-900 mr-6">
          Didn't find your topic?{" "}
        </p>
        <div className="flex mt-1 text-red-700">
        <RiMessageLine />
        </div>
        <p className="pl-2 text-md"><em>Start Discussing</em></p>
      </div>
    </div>
  );
};

export default Topics;
