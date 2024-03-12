import React from "react";
import handimg from "../Data/choose-main.39852b7511b28d44406f.png";
import { IoWalletOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiLayoutBottomLine } from "react-icons/ri";
import { AiOutlineBlock } from "react-icons/ai";

function chooseUs() {
  const mystyle = {
    background: "-webkit-linear-gradient(#C147E9, #19376D)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  };
  return (
    <>
      <div id="section3">
        <div className="bg-[#000000]">
          <div>
            <p className="text-center font-black text-[4rem] text-white">
              WHY <span style={mystyle}>CHOOSE US</span>
            </p>
          </div>

          <div className="grid  sm:grid-cols-[33%,34%,33%] max-w-[100vw] grid-cols-1 mt-10">
            <div>
              <div className="flex flex-col gap-12 justify-center items-center">
                <div className="flex justify-center gap-7 bg-[#111114]  w-[80vw] h-[37vh]  sm:w-[60vw] md:w-[45vw]  lg:w-[27vw] border-solid border-white border-[0.5px] rounded-2xl">
                  <div>
                    <div className="mt-7 text-white flex justify-center items-center h-[55px] w-[48px] rounded-md bg-gradient-to-b from-[#420e52] to-[#0c0148]" >
                      <IoWalletOutline className="font-black text-[1.8rem]" />
                    </div>
                  </div>
                  <div className="text-white text-left mt-6">
                    <p className="font-black text-[1.3rem] mb-2">
                      CONNECT YOUR
                      <br />
                      WALLET
                    </p>
                    <p className="text-[1.3rem]">
                      Use Trust Wallet,
                      <br />
                      Metamast or to connect
                      <br />
                      to the app.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-7 bg-[#111114] w-[80vw] h-[37vh]  sm:w-[60vw] md:w-[45vw]  lg:w-[27vw] border-solid border-white border-[0.5px] rounded-2xl">
                  <div>
                    <div className="mt-7 text-white flex justify-center items-center h-[55px] w-[48px] rounded-md bg-gradient-to-b from-[#420e52] to-[#0c0148]">
                      <GoPencil className="font-black text-[1.8rem]" />
                    </div>
                  </div>
                  <div className="text-white text-left mt-6">
                    <p className="font-black text-[1.3rem] mb-2">
                      SELECT YOUR
                      <br />
                      QUANTITY
                    </p>
                    <p className="text-[1.3rem]">
                      Upload your crypto and
                      <br />
                      set a title, description
                      <br />
                      and price.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-7 bg-[#111114] w-[80vw] h-[37vh]  sm:w-[60vw] md:w-[45vw]  lg:w-[27vw] border-solid border-white border-[0.5px] rounded-2xl">
                  <div>
                    <div className="mt-7 text-white flex justify-center items-center h-[55px] w-[48px] rounded-md bg-gradient-to-b from-[#420e52] to-[#0c0148]">
                      <TbNotes className="font-black text-[1.8rem]" />
                    </div>
                  </div>
                  <div className="text-white text-left mt-6">
                    <p className="font-black text-[1.3rem] mb-2">
                      CONFIRM
                      <br />
                      TRANSACTION
                    </p>
                    <p className="text-[1.3rem]">
                      Earn by selling your
                      <br />
                      crypto on our
                      <br />
                      marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 mb-10">
              <img className="h-[70vh] " src={handimg} alt="" />
            </div>
            <div>
                <div className="flex flex-col gap-12 justify-center items-center">
                <div className="flex justify-center gap-7 bg-[#111114]  w-[80vw] h-[37vh]  sm:w-[60vw] md:w-[45vw]  lg:w-[27vw] border-solid border-white border-[0.5px] rounded-2xl">
                  <div>
                    <div className="mt-7 text-white flex justify-center items-center h-[55px] w-[48px] rounded-md bg-gradient-to-b from-[#420e52] to-[#0c0148]">
                      <FaMobileAlt className="font-black text-[1.8rem]" />
                    </div>
                  </div>
                  <div className="text-white text-left mt-6">
                    <p className="font-black text-[1.3rem] mb-2">
                    RECEIVE YOUR
                      <br />
                      OWN NFTS
                    </p>
                    <p className="text-[1.3rem]">
                    Invest all your crypto
                      <br />
                      at one place on one
                      <br />
                      platform.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-7 bg-[#111114]  w-[80vw] h-[46vh]  sm:w-[60vw] md:w-[45vw]  lg:w-[27vw] border-solid border-white border-[0.5px] rounded-2xl">
                  <div>
                    <div className="mt-7 text-white flex justify-center items-center h-[55px] w-[48px] rounded-md bg-gradient-to-b from-[#420e52] to-[#0c0148]">
                      <RiLayoutBottomLine className="font-black text-[1.8rem]" />
                    </div>
                  </div>
                  <div className="text-white text-left mt-6">
                    <p className="font-black text-[1.3rem] mb-2">
                    TAKE A
                      <br />
                      MARKET TO
                      <br />
                      SELL
                    </p>
                    <p className="text-[1.3rem]">
                    Discover, collect the
                      <br />
                      right crypto
                      <br />
                      collections to buy or
                      <br />
                      sell.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-7 bg-[#111114]  w-[80vw] h-[37vh]  sm:w-[60vw] md:w-[45vw]  lg:w-[27vw] border-solid border-white border-[0.5px] rounded-2xl">
                  <div>
                    <div className="mt-7 text-white flex justify-center items-center h-[55px] w-[48px] rounded-md bg-gradient-to-b from-[#420e52] to-[#0c0148]">
                      <AiOutlineBlock className="font-black text-[1.8rem]" />
                    </div>
                  </div>
                  <div className="text-white text-left mt-6">
                    <p className="font-black text-[1.3rem] mb-2">
                    DRIVE YOUR
                      <br />
                      COLLECTION
                    </p>
                    <p className="text-[1.3rem]">
                    We make it easy to
                      <br />
                      Discover, Invest and
                      <br />
                      manage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default chooseUs;
