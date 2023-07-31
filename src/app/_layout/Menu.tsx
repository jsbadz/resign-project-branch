"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "../../../node_modules/next/navigation";
// import Link from "../../../node_modules/next/link";
import Cart from '../component/Cart/Cart';
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import Menus from "../component/Menu/Menu";
import { MenuItemProps, MenuProps } from "../interfaces";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";

export const Menu = () => {
   const pathname = usePathname();

   const [showCart, setShowCart] = useState(false);
   const [openSearch, setOpenSearch] = useState(false);
   const cartRef = useRef<HTMLDivElement>(null);

   const handleCloseSearch = () => {
      setOpenSearch(false);      
   };

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
         setShowCart(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

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
                        <Menus
                           wrapperClassName={`cursor-pointer flex`}
                           menuClassName={`polygon text-[#1e4b57] active hover:text-white hover:bg-[#f04336] font-[700] custom-rounded px-5 py-2 transition ease-out duration-500`}
                           items={menuItems}
                        />
                     </div>
                  </div>
                  <div className="flex items-center gap-5">
                     <BsSearch
                        size={24}
                        onClick={() => setOpenSearch(!openSearch)}
                        className="cursor-pointer"
                     />
                     <Cart className=" relative" count={7} onClick={() => setShowCart(!showCart)} />
                     <h1 className="bg-[#f04336] p-2 rounded-lg text-white">ADOPT HERE TESTs</h1>
                  </div>
                  {showCart ? (
                     <div ref={cartRef} className={(showCart ? "right-[3%]" : "right-0") + " bg-white top-[5rem] w-full px-5 sm:w-[380px] border-2 border-black min-h-[400px] transition-right shadow-xl pb-5 z-40 absolute"}>
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
            </div>
            {openSearch ? (
               <div className="flex absolute w-full max-w-[1024] h-screen top-0 justify-center border-2 border-red-700">
                  <div className="flex flex-col items-center justify-center bg-white  w-full ">
                     <div className="flex  w-full justify-end absolute top-0 p-10">
                        <AiOutlineClose
                           size={24}
                           className="text-[#f04336] cursor-pointer font-900"
                           onClick={handleCloseSearch}
                        />
                     </div>
                     <div className="flex flex-col justify-center items-center w-full">
                        <h6 className="text-5xl font-[600] text-[#0a303a] pb-[50px]">
                           ...Search Here...
                        </h6>
                        <div className="pt-2 relative mx-auto text-gray-600">
                           <input
                              className="border-2 text-center border-[#f04336] bg-white h-[53px] px-5 pr-16 text-3xl focus:outline-none w-[1280px] border-t-0 border-l-0 border-r-0"
                              type="search"
                              name="search"
                           />
                           <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                              <BsSearch size={24} className="text-[#f04336]" />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ) : null}
            <div className="img-header left-0 w-full h-16 bg-repeat bg-center absolute bottom-[-20px] -z-20"></div>
         </div>
      </>
   );
};
