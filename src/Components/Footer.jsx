import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
function Footer() {
  return (
    <div className="bg-[#000000] min-h-[70vh] flex flex-col justify-center items-center gap-7 " id='footer'>
        <div className='flex justify-center items-center gap-7 text-white font-black text-[2rem]'>
            <FiTwitter className='cursor-pointer'/>
            <RiDiscordLine className='cursor-pointer'/>
            <SlSocialFacebook className='cursor-pointer'/>
            <CiYoutube className='cursor-pointer'/>
        </div>
        <div className='flex justify-center flex-col items-center gap-6 text-white'>
           <p className='cursor-pointer'>Privacy</p>
           <p className='cursor-pointer'>Term Of Use</p>
           <p>&copy; Copyright 2024. All Rights Reserved by Arslan.</p>

        </div>
    </div>
  )
}

export default Footer