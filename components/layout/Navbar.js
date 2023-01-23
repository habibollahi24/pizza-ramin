import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { HiShoppingCart } from "react-icons/hi";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
   const links = [
      { id: 1, path: "/", name: "خانه" },
      { id: 2, path: "/menu", name: "منو" },
      { id: 3, path: "/aboutus", name: "درباره ما" },
      { id: 4, path: "/contactus", name: "ارتباط باما" },
   ];
   const { pathname } = useRouter();

   return (
      <div className=" fixed md:static w-full z-[10000] top-0  right-0 md:mt-3">
         <div className=" my-container  text-white flex  items-center justify-between bg-slate-700 p-6  md:rounded-2xl  shadow-md relative">
            {/* logo */}
            <div className="align-middle text-white text-lg md:text-2xl">
               Pizza-Ramin
            </div>
            <DesctopNav pathname={pathname} links={links} />
            {/* cart */}
            <div className="flex items-center justify-around px-5 flex-grow md:flex-grow-0 md:px-0  md:gap-x-5">
               <div className="text-white text-2xl mt-2 relative">
                  <HiShoppingCart />
                  <div className="absolute -top-4  -right-4 text-base font-semibold w-6 h-6 flex justify-center items-center rounded-full bg-red-500 text-white">
                     5
                  </div>
               </div>
               <button className="btn-primary ">ورود</button>
            </div>
            <MobileNav pathname={pathname} links={links} />
         </div>
      </div>
   );
};

const DesctopNav = ({ pathname, links }) => {
   return (
      <nav className="hidden md:block ">
         <ul className="flex items-center gap-x-10 ">
            {links.map((link) => {
               return (
                  <li
                     key={link.id}
                     className={` ${
                        pathname === link.path ? "active-link" : ""
                     } transition-all duration-200 font-semibold hover:text-red-400`}
                  >
                     <Link href={link.path}>
                        <a>{link.name}</a>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};

const MobileNav = ({ pathname, links }) => {
   const [show, setShow] = useState(false);
   return (
      <div className="md:hidden">
         <button
            onClick={() => setShow(!show)}
            className="transition-all duration-300 relative z-20 md:hidden text-4xl align-bottom"
         >
            {show ? <HiX /> : <HiMenu />}
         </button>
         <nav
            className={` md:hidden flex flex-wrap  justify-between items-start pt-20 transition-all duration-300 w-screen h-screen  bg-gradient-to-t from-slate-800 to-slate-700 absolute  top-0  right-0 ${
               !show ? "translate-x-full" : "translate-x-0"
            } `}
         >
            <ul className="flex flex-col p-6 w-full shadow-lg  text-xl mx-8 rounded-xl  space-y-5 items-start ">
               {links.map((link) => {
                  return (
                     <li
                        key={link.id}
                        className={` ${
                           pathname === link.path ? "active-link" : ""
                        } w-full  font-semibold hover:text-yellow-500`}
                     >
                        <Link href={link.path}>
                           <a className="block">{link.name}</a>
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </nav>
      </div>
   );
};

export default Navbar;
