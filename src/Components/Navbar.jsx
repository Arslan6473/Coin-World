import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGg, FaTwitter, FaDiscord } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const [fix,setFix] = useState(false);
  const scrollfix =()=>{
    if(window.scrollY >= 100){
      setFix(true)
    }else{
      setFix(false)
    }
  }
  window.addEventListener('scroll',scrollfix);
  const [istoggle, setistoggle] = useState(false);
  const toggle = () => {
    setistoggle((istoggle)=>!istoggle);
  };

  const routes = [
    { name: "Home", link   :'section1' },
    { name: "Market", link: 'section2' },
    { name: "Choose Us", link: 'section3' },
    { name: "Join Us", link: 'section4' },
  ];
  return (
    <>
      <nav className={` ${fix ? 'bg-black' : 'bg-[#1d0e52]'} text-white grid md:grid-cols-[25%,50%,25%] grid-cols-1 sticky top-0 z-10 h-20`}>
        <div className="flex gap-2 md:justify-center justify-normal items-center m-5 ">
          <div>
            <FaGg className="md:text-[2rem] text-[1.8rem] cursor-pointer" />
          </div>
          <Link 
          to='section1'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <div className="md:text-[1.8rem] text-[1.5rem] font-bold cursor-pointer">
            CoinWorld
          </div>
          </Link>
        </div>
        <ul
          className={`md:m-6 m-2 md:gap-7 md:bg-transparent bg-[#1d0e52] md:flex-row md:items-center md:justify-center text-[1.2rem] font-bold flex flex-col gap-9  ${
            istoggle ? "hidden" : "inline"
          }`}
        >
          {routes.map((route) => (
            <li className="cursor-pointer" key={route.name}>
              <Link
                to={route.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden text-[1.2rem] absolute  top-8 right-8 "
          onClick={toggle}
        >
          {istoggle ? (
            <div>
              <GiHamburgerMenu className="text-white " />
            </div>
          ) : (
            <div>
              <RxCross2 className="text-white " />
            </div>
          )}
        </div>
        <div
          className={`flex justify-center   items-center md:m-6 mt-6 mr-12 ${
            istoggle ? "hidden" : "inline"
          }`}
        >
          <div>
            <FaTwitter className="text-[1.8rem] ml-14 cursor-pointer" />
          </div>
          <div>
            <FaDiscord className="text-[1.8rem] ml-6 cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
