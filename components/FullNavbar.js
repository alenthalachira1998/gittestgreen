import React from 'react'
import NavBar from './NavBar'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import Image from 'next/image'

const FullNavbar = () => {
    return (
        <div className="flex   justify-center">
        <div className="flex absolute justify-between pt-4 w-11/12 ">
        
            <div className="flex text-2xl text-white" > <AiOutlineInstagram/>
        
            <AiOutlineFacebook/>
           </div>
           {/* <div className="flex  absolute overflow-hidden " >
           <Image
        src="/logo.png"
        alt="Picture of the author"
        width={120}
        height={40}
      />  </div> */}
           <div className="text-2xl  text-white"></div><NavBar/>
           
        </div>
        </div>
     
    )
}

export default FullNavbar
