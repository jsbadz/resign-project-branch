"use client"


import React, { useState } from 'react'
import { usePathname } from '../../../node_modules/next/navigation'
import Link from '../../../node_modules/next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export const Menu = () => {

   const pathname = usePathname()

   const [showCart, setShowCart] = useState(false);

   const menuItems = [
      {
         title: "Home",
         url: "/",
      },
      {
         title: "Dog List",
         url: "/dog-list",
      },
      {
         title: "Shop",
         url: "/shop",
      },
      {
         title: "Adoption",
         url: "/adoption"
      },
      {
         title: "Breeder",
         url: "/breeder",
      },
      {
         title: "Blog",
         url: "/blog",
      },
      {
         title: "Contacts",
         url: "/contacts",
      },
   ]

   return (
      <>
         <div className="md:flex justify-between items-center text-md sticky top-0 z-20 transition-down bg-white">
            <div className="flex w-full max-w-[1480px] m-auto justify-between px-8 xl:px-0">
               <div className="flex items-center h-[100px] w-full justify-between">
                  <div className="flex items-center">
                     <div className="w-[200px]">
                        <h1 className="text-[#f04336] font-[900]">LOGO HEREEE</h1>
                     </div>
                     <div className="flex items-center">
                        <ul className="flex gap-3">
                           {menuItems.map((item, index) => (
                              <li key={index}>
                                 <Link
                                    href={item.url}
                                    className={`cursor-pointer ${pathname === item.url ? "bg-[#f04336] text-white test px-5 py-2 font-[700] custom-rounded" : "text-[#1e4b57] hover:test hover:text-white hover:bg-[#f04336] font-[700] w-[200px] custom-rounded px-5 py-2"}`}
                                 >
                                    {item.title}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="flex items-center gap-5">
                     <BsSearch size={24} />
                     <AiOutlineShoppingCart size={26}  />
                     <h1 className="bg-[#f04336] p-2 rounded-lg text-white">ADOPT HERE TESTs</h1>
                  </div>
               </div>
            </div>
            <div className="img-header left-0 w-full h-16 bg-repeat bg-center absolute bottom-[-20px] -z-20"></div>
         </div>
      </>
   )
}
