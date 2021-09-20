import React, { useState } from "react";
import Link from 'next/link';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./Data/SidebarData.js";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";
 const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    // <>
    //   <IconContext.Provider value={{ color: "#fff" }}>
    //     <div className="navbar">
    //       <Link href="#" className="menu-bars">
    //         <FaIcons.FaBars onClick={showSidebar} />
    //       </Link>
    //     </div>
    //     <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    //       <ul className="nav-menu-items" onClick={showSidebar}>
    //         <li className="navbar-toggle">
    //           <Link href="#" className="menu-bars">
    //             <AiIcons.AiOutlineClose />
    //           </Link>
    //         </li>
    //         {SidebarData.map((item, index) => {
    //           return (
    //             <li key=-100{index} className={item.cName}>
    //               <Link href={item.path}>
    //                 {item.icon}
    //                 </Link>
    //                 <Link href="#">
    //                 <span>{item.title}</span>
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </nav>
    //   </IconContext.Provider>
   // </>
   <>
   <div>
    <div
      className="absolute" 
    
    >
      <button onClick={showSidebar} className="text-gray-200  text-3xl  font-bold"><AiOutlineMenu/></button>
    </div>
    <nav
      className={sidebar ?  'navbar relative -top-4  w-64  overflow-x bg-gray-700   ':'hidden'} 
     
    >
      <div className="flex  justify-end">
        <button onClick={showSidebar} className="  text-white text-xl font-bold"><AiOutlineCloseCircle/></button>
      </div>
      <h1 className="text-xl text-center font-bold pt-5">Menu</h1>
      <ul className="list-none text-white text-center">
        <li className="my-8">
          <a href="#"></a>Teams
        </li>
        <li className="my-8">
          <a href="#"></a>Projects
        </li>
        <li className="my-8">
          <a href="#"></a>Favourites
        </li>
        <li className="my-8">
          <a href="#"></a>Notifications
        </li>
        <li className="my-8">
          <a href="#"></a>Members
        </li>
      </ul>
    </nav>
  </div>
   </>
 );
};

export default NavBar;
