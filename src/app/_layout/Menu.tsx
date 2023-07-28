"use client";

import React, { useState } from "react";
import { usePathname } from "../../../node_modules/next/navigation";
// import Link from "../../../node_modules/next/link";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

import Menus from "../component/Menu/Menu";
import { MenuItemProps, MenuProps } from "../interfaces";

export const Menu = () => {
  const pathname = usePathname();

  const [showCart, setShowCart] = useState(false);

  const menuItems: MenuItemProps[] = [
    {
      label: "Home",
      key: "/",
      url: "/",
      type: "link",
    },
    {
      label: "Dog List",
      key: "/dog-list",
      url: "/dog-list",
      type: "link",
      children: [
         {
           label: "Solutions",
           key: "solutions-1",
           url: "/services/solutions",
           type: "link",
           children: [
             {
               label: "Solutions",
               key: "solutions-1",
               url: "/services/solutions",
               type: "link",
               children: [
                 {
                   label: "Solutions",
                   key: "solutions",
                   url: "/services/solutions",
                   type: "link",
                 },
                 {
                   label: "Solutions",
                   key: "solutions",
                   url: "/services/solutions",
                   type: "link",
                 },
                 {
                   label: "Solutions",
                   key: "solutions",
                   url: "/services/solutions",
                   type: "link",
                 },
               ],
             },
             {
               label: "Solutions",
               key: "solutions-1-2",
               url: "/services/solutions",
               type: "link",
             },
             {
               label: "Solutions",
               key: "solutions-1-3",
               url: "/services/solutions",
               type: "link",
             },
           ],
         },
         {
           label: "Solutions",
           key: "solutions-2",
           url: "/services/solutions",
           type: "link",
           children: [
             {
               label: "Solutions",
               key: "solutions-2-1",
               url: "/services/solutions",
               type: "link",
               children: [
                 {
                   label: "Solutions",
                   key: "solutions-2-2",
                   url: "/services/solutions",
                   type: "link",
                 },
                 {
                   label: "Solutions",
                   key: "solutions-2-3",
                   url: "/services/solutions",
                   type: "link",
                 },
                 {
                   label: "Solutions",
                   key: "solutions-2-4",
                   url: "/services/solutions",
                   type: "link",
                 },
               ],
             },
             {
               label: "Solutions",
               key: "solutions",
               url: "/services/solutions",
               type: "link",
             },
             {
               label: "Solutions",
               key: "solutions",
               url: "/services/solutions",
               type: "link",
             },
           ],
         },
         {
           label: "Solutions",
           key: "solutions-3",
           url: "/services/solutions",
           type: "link",
         },
       ],
    },
    {
      label: "Shop",
      key: "/shop",
      url: "/shop",
      type: "link",
    },
    {
      label: "Adoption",
      key: "/adoption",
      url: "/adoption",
      type: "link",
    },
    {
      label: "Breeder",
      key: "/breeder",
      url: "/breeder",
      type: "link",
    },
    {
      label: "Blog",
      key: "/blog",
      url: "/blog",
      type: "link",
    },
    {
      label: "Contacts",
      key: "/contacts",
      url: "/contacts",
      type: "link",
    },
  ];

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
                {/* <ul className="flex gap-3"> */}
                  <Menus
                  
                    wrapperClassName={`cursor-pointer flex`}
                    menuClassName={`text-[#1e4b57] hover:test hover:text-white hover:bg-[#f04336] font-[700] custom-rounded px-5 py-2`}
                    items={menuItems}
                  />
                  {/* {menuItems.map((item, index) => (
                              <li key={index}>
                                 <Link
                                    href={item.url}
                                    className={`nav-link cursor-pointer ${pathname === item.url ? "bg-[#f04336] text-white active px-5 py-2 font-[700] custom-rounded" : "text-[#1e4b57]  hover:text-white hover:bg-[#f04336] font-[700] w-[200px] custom-rounded px-5 py-2"}`}
                                 >
                                    {item.title}
                                 </Link>
                              </li>
                           ))} */}
                {/* </ul> */}
              </div>
            </div>
            <div className="flex items-center gap-5">
              {/* <BsSearch size={24} /> */}
              {/* <AiOutlineShoppingCart size={26}  /> */}
              <h1 className="bg-[#f04336] p-2 rounded-lg text-white">
                ADOPT HERE TESTs
              </h1>
            </div>
          </div>
        </div>
        <div className="img-header left-0 w-full h-16 bg-repeat bg-center absolute bottom-[-20px] -z-20"></div>
      </div>
    </>
  );
};
