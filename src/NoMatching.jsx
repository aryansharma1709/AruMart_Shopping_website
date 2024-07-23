import React from 'react';
import { MdOutlineError } from "react-icons/md";
function  NoMatching(){
  return (
    <div className="text-red-700 text-xl md:text-5xl flex justify-center items-center  min-h-screen bg-white  mx-20 px-10 mb-10 shadow-md ">
      <MdOutlineError /> !!No Product Found !!
    </div>
  );
}
export default NoMatching;