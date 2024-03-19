import React from "react";
import bitcoin from "../Data/bitcoin.e146d46fb598ae0d8f43.png";
import eterium from "../Data/ethereum.c6cffe78f0c6abc85da9.png";
import { Coins } from ".";
function Home({ coins, isLoding }) {
  const mystyle = {
    background: "-webkit-linear-gradient(#C147E9, #19376D)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  };
  return (
    <>
      <div
        className="bg-gradient-to-b from-[#1d0e52] to-[#000000] min-h-[110vh] pt-12 "
        id="section1"
      >
        <div>
          <div className="text-[4rem] relative md:text-[5.8rem] font-bold text-[white]">
            <p>TRACK AND TRADE</p>
            <div className="absolute top-8 lg:inline hidden  left-24 ">
              <img
                src={bitcoin}
                alt=""
                className=" h-20 motion-safe:animate-bounce"
              />
            </div>
            <div className="absolute top-8 lg:inline hidden right-24 ">
              <img src={eterium} alt="" className=" h-20 animate-bounce" />
            </div>
          </div>
          <div
            className="text-[4rem] md:text-[5.8rem] font-bold "
            style={mystyle}
          >
            CRYPTO CURRENCIES
          </div>
          {isLoding ? (
            <div className="flex justify-center items-center mx-auto" >
              <h1 className="text-white text-5xl text-center box-border p-6">
                Loding.....
              </h1>
            </div>
          ) : (
            <Coins coins={coins}></Coins>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;