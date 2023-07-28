"use client";

import React, { useState } from "react";
import { usePathname } from "../../../node_modules/next/navigation";
// import Link from "../../../node_modules/next/link";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

<<<<<<< HEAD
import React, { useState } from 'react'
import { usePathname } from '../../../node_modules/next/navigation'
import Link from '../../../node_modules/next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Cart from '../component/Cart/Cart';
import Image from '../../../node_modules/next/image';
import { BiTrash } from "react-icons/bi";
=======
import Menus from "../component/Menu/Menu";
import { MenuItemProps, MenuProps } from "../interfaces";
>>>>>>> ea8616a697ca076f4ab86ec51c259967ad80347d

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

<<<<<<< HEAD
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

   const cartData = [
      {
         image: "../img/cart_p01.jpg",
         name: "John Stephen Badelic",
         quantity: "1",
         price: 231,
      },
      {
         image: "../img/cart_p02.jpg",
         name: "Marichu Mae Niere",
         quantity: "1",
         price: 221,
      },
      {
         image: "../img/cart_p01.jpg",
         name: "Clara Mae Tacatani",
         quantity: "1",
         price: 131,
      },
      {
         image: "../img/cart_p02.jpg",
         name: "Sarah Mae Anga",
         quantity: "1",
         price: 431,
      }
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
=======
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
>>>>>>> ea8616a697ca076f4ab86ec51c259967ad80347d
                              <li key={index}>
                                 <Link
                                    href={item.url}
                                    className={`nav-link cursor-pointer ${pathname === item.url ? "bg-[#f04336] text-white active px-5 py-2 font-[700] custom-rounded" : "text-[#1e4b57]  hover:text-white hover:bg-[#f04336] font-[700] w-[200px] custom-rounded px-5 py-2"}`}
                                 >
                                    {item.title}
                                 </Link>
                              </li>
<<<<<<< HEAD
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="flex items-center gap-5">
                     <BsSearch size={24} />
                     <Cart className=" relative" count={7} onClick={() => setShowCart(!showCart)} />
                     <h1 className="bg-[#f04336] p-2 rounded-lg text-white">ADOPT HERE TESTs</h1>
                  </div>
                  {showCart ? (
                     <div className={(showCart ? "right-0" : "right-0") + " bg-white top-[5rem] w-full px-5 sm:w-[380px] min-h-[400px] transition-right shadow-xl pb-5 z-40 absolute"}>
                        {cartData && cartData.length ? (
                           <div className="flex flex-col py-5 custom-scroll">
                              <div className='overflow-y-auto h-[230px]'>
                                 {cartData.map((items, i) => (
                                    <div
                                       className="flex flex-col justify-between"
                                       key={i}
                                    >
                                       <div className="flex justify-between items-center gap-2">
                                          <div className="flex">
                                             <Image
                                                loader={() =>
                                                   "../img/cart_p01.jpg"
                                                }
                                                src={
                                                   "../img/cart_p01.jpg"
                                                }
                                                width="100"
                                                height="100"
                                                objectFit="fill"
                                                alt="image"
                                                className="rounded-t-xl cursor-pointer"
                                             />
                                             <div className="flex flex-col justify-between">
                                                <span className="text-lg font-[700]">
                                                   {items.name}
                                                </span>
                                                <span className="text-md text-gray-500 font-[700]">
                                                   100
                                                </span>
                                             </div>
                                          </div>
                                          <BiTrash size={24} />
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        ) : (
                           <>
                              <div className="flex flex-col rounded-xl h-[230px] ">
                                 <div className="flex flex-col justify-center items-center h-full">
                                    <span className="p-3 text-default-purple">
                                       <AiOutlineShoppingCart size={32} />
                                    </span>
                                    <label className="font-custom ">
                                       Your cart is currently empty
                                    </label>
                                 </div>
                              </div>
                           </>
                        )}
                        <div className="flex justify-between mt-5">
                           <span className="text-[#8e8e8e] text-md">
                              Total:
                           </span>
                           <span className="text-[#8e8e8e] text-md">
                              $180
                           </span>
                        </div>
                        <button className="bg-[#f04336] text-white p-5 w-full uppercase text-sm mt-5">
                           Shopping Cart
                        </button>
                        <button className="bg-[#0a303a] text-white p-5 w-full uppercase text-sm mt-2">
                            Checkout
                        </button>
                     </div>
                  ) : null}
               </div>
=======
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
>>>>>>> ea8616a697ca076f4ab86ec51c259967ad80347d
            </div>
          </div>
        </div>
        <div className="img-header left-0 w-full h-16 bg-repeat bg-center absolute bottom-[-20px] -z-20"></div>
      </div>
    </>
  );
};
