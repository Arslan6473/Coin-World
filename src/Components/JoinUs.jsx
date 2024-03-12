import React from "react";
import bitcoin from "../Data/bitcoin.e146d46fb598ae0d8f43.png";
import eterium from "../Data/ethereum.c6cffe78f0c6abc85da9.png";

function JoinUs() {
  const mystyle = {
    background: "-webkit-linear-gradient(#C147E9, #19376D)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  };
  return (
    <div className="bg-[#000000]" id="section4">
      <div className="flex flex-col justify-center items-center gap-[-3] text-white relative">
        <div className="absolute top-22 lg:inline hidden  left-[20%]">
          <img
            src={bitcoin}
            alt=""
            className=" h-20 motion-safe:animate-bounce"
          />
        </div>
        <div className="absolute top-22 lg:inline hidden right-[20%]  ">
              <img 
              src={eterium} 
              alt="" 
              className=" h-20 animate-bounce" 
              />
          </div>
 
        <p className="sm:text-[6rem] text-[3.8rem] font-bold mt-14">JOIN US VIA</p>
        <p style={mystyle} className="sm:text-[6rem] text-[3.8rem] font-bold">
          DISCORD
        </p>
        <p className="sm:text-[1.3rem] text-[0.8rem]">
          Invest and manage all your crypto at one place.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 cursor-pointer">
        <div className="flex items-center justify-center mt-10  cursor-pointer h-[60px] text-white text-[1.2rem] font-bold rounded-3xl w-[200px] bg-gradient-to-b from-[#420e52] to-[#0c0148]">
          Join Via Discord
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
