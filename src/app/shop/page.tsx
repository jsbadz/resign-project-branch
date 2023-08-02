import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { FaCircleNotch, FaListUl, FaTh } from "react-icons/fa";
import { Button } from '../component';
import Image from 'next/image';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import Link from 'next/link';
import { redirect } from 'next/navigation';
// import { Router } from 'next/router';

const shop = () => {

   const shopAdd = '/img/shop_add.jpg'

   const category = [
      {
         name: "Squeaky",
      },
      {
         name: "Dog Food",
      },
      {
         name: "Dog-Kit",
      },
      {
         name: "Dog Home",
      },
      {
         name: "Safety - Suits",
      },
      {
         name: "Pet Protect",
      },
   ]

   const topBrand = [
      {
         name: "Geco",
      },
      {
         name: "Carnation",
      },
      {
         name: "WeBeyond",
      },
      {
         name: "Dog Home",
      },
      {
         name: "Edstudy",
      },
   ]

   const shopData = [
      {
         id: 1,
         image: "/img/shop_item04.jpg",
         category: "Dog Toy's",
         name: "Pet Knit Knacks",
         price: 190,
      },
      {
         id: 2,
         image: "/img/shop_item05.jpg",
         category: "Dog Toy's",
         name: "Squeaky Dog",
         price: 190,
      },
      {
         id: 3,
         image: "/img/shop_item06.jpg",
         category: "Dog Toy's",
         name: "Pet Knit Knacks",
         price: 190,
      },
      {
         id: 4,
         image: "/img/shop_item01.jpg",
         category: "Dog Toy's",
         name: "Yoda Carriage",
         price: 190,
      },
      {
         id: 5,
         image: "/img/shop_item02.jpg",
         category: "Dog Toy's",
         name: "Pet Carriage",
         price: 190,
      },
      {
         id: 6,
         image: "/img/shop_item03.jpg",
         category: "Dog Toy's",
         name: "Squeaky Dog",
         price: 190,
      },
      {
         id: 7,
         image: "/img/shop_item07.jpg",
         category: "Dog Toy's",
         name: "Carriage Dog",
         price: 190,
      },
      {
         id: 8,
         image: "/img/shop_item08.jpg",
         category: "Dog Toy's",
         name: "Yoda Carriage",
         price: 190,
      },
      {
         id: 9,
         image: "/img/shop_item09.jpg",
         category: "Dog Toy's",
         name: "Pet Knit Knacks",
         price: 190,
      },
   ]

   return (
      <>
         <div className="w-full pt-[110px] pb-[60px]">
            <div className="container max-w-[540px] md:max-w-[960px] lg:max-w-[1230px]">
               <div className="flex flex-row w-full max-h-full gap-5">
                  <div className="flex flex-col w-1/4 px-3">
                     <div className="relative mb-4 flex w-full flex-wrap">
                        <input
                           type="search"
                           className="relative bg-[#f5f2eb] m-0 -mr-0.5 block w-[1px] h-[60px] min-w-0 flex-auto rounded-l border-[#1e4b57] text-black px-3 py-[0.25rem] text-base outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#f04336] focus:outline-none "
                           placeholder="Search"
                           aria-label="Search"
                           aria-describedby="button-addon1"
                        />
                        <button
                           className="relative z-[2] flex items-center rounded-r bg-[#f04336] px-6 py-2.5 text-white shadow-md transition duration-150 ease-in-out "
                           type="button"
                           id="button-addon1"
                           data-te-ripple-init
                           data-te-ripple-color="light">

                           <IoMdSearch size={24} />
                        </button>
                     </div>
                     <div className="flex flex-col pb-7">
                        <h6 className="font-[700] text-xl text-[#1e4b57] pb-5">
                           Category
                        </h6>
                        {category.map((item, i) => (
                           <>
                              <div
                                 key={i}
                                 className="flex px-[18px] py-[14px]"
                              >
                                 <Button
                                    label={item.name}
                                    className="flex justify-between w-full"
                                    icon={<BsPlus className="text-[#676666] hover:text-[#f04336]" />}
                                    iconPlacement="right"
                                 />
                                 {/* <span className="text-[#676666] text-sm font-[600] hover:text-[#1e4b57]">
                                    {item.name}
                                 </span>
                                 <BsPlus className="text-[#676666] hover:text-[#f04336]" /> */}
                              </div>
                           </>
                        ))}
                     </div>
                     <div className="flex flex-col pb-7 ">
                        <h6 className="font-[700] text-xl text-[#1e4b57] pb-3 ">
                           Top Brand
                        </h6>
                        {topBrand.map((item, i) => (
                           <>
                              <div
                                 key={i}
                                 className="flex flex-row items-center gap-3 pt-3 group/brand"
                              >
                                 <FaCircleNotch className="text-[#676666] group-hover/brand:text-[#f04336]" />
                                 <span className="text-[#676666] text-sm font-[600] group-hover/brand:text-[#f04336]">
                                    {item.name}
                                 </span>
                              </div>
                           </>
                        ))}
                     </div>
                     <div className="flex flex-col">
                        <h6 className="font-[700] text-xl text-[#1e4b57] pb-3 ">
                           Filter By Price
                        </h6>
                        <div className="relative mb-4 flex w-full flex-wrap items-center">
                           <label
                              htmlFor=""
                              className="text-xs font-[600]"
                           >
                              Price:
                           </label>
                           <input
                              type="text"
                              className="relative bg-transparent m-0 -mr-0.5 block w-[1px] h-[60px] min-w-0 flex-auto text-sm text-black px-3 py-[0.25rem] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#f04336] focus:outline-none "
                              placeholder="Add Your Price"
                              aria-label="price"
                              aria-describedby="button-addon1"
                           />
                           <button
                              className="relative z-[2] flex items-center rounded hover:bg-[#f04336] bg-[#f5f2eb] px-4 py-2.5 text-black text-xs font-[600] uppercase shadow-md transition duration-150 ease-in-out "
                              type="button"
                              id="button-addon1"
                              data-te-ripple-init
                              data-te-ripple-color="light">

                              Submit
                           </button>
                        </div>
                     </div>
                     <hr className="border border-[#ebebeb]" />
                     <div className="pt-[45px]">
                        <Image
                           src={shopAdd}
                           alt={'shopAdd'}
                           className="w-full object-cover rounded"
                           width={1000}
                           height={1000}
                           quality={100}
                        />
                     </div>
                  </div>
                  <div className="flex w-3/4 px-3">
                     <div className="flex flex-col w-full">
                        <h3 className="text-2xl font-[900] text-[#0a303a] pb-5">
                           Shop
                        </h3>
                        <div className="flex w-full bg-[#f5f2eb] px-3 py-5 justify-between pb-5">
                           <div className="flex gap-5 items-center">
                              <div className="flex gap-3">
                                 <a
                                    href="#"
                                    className="flex items-center justify-center border border-[#e1e1e1] bg-white w-[33px] h-[32px] rounded hover:bg-[#f04336] hover:text-white"
                                 >
                                    <FaTh size={18} />
                                 </a>
                                 <a
                                    href="#"
                                    className="flex items-center justify-center border border-[#e1e1e1] bg-white w-[33px] h-[32px] rounded hover:bg-[#f04336] hover:text-white"
                                 >
                                    <FaListUl size={18} />
                                 </a>
                              </div>
                              <div className="flex items-center">
                                 <span
                                    className="text-xs font-[700]"
                                 >
                                    Total Items 1-12 of 13
                                 </span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <span
                                    className="text-xs font-[700]"
                                 >
                                    Show
                                 </span>
                                 <select
                                    id="countries_disabled"
                                    className="text-[#0a303a] text-sm rounded p-2.5 border border-[#e1e1e1] bg-white"
                                 >
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                    <option value="18">18</option>
                                    <option value="20">20</option>
                                 </select>
                              </div>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-xs font-[700]">
                                 Sort by:
                              </span>
                              <select
                                 id="countries_disabled"
                                 className="text-[#0a303a] text-sm rounded w-[140px] p-2.5 border border-[#e1e1e1] bg-white"
                              >
                                 <option value="US">Sort by latest</option>
                                 <option value="CA">Low to high</option>
                                 <option value="FR">High to low</option>
                                 <option value="DE">Popularity</option>
                              </select>
                           </div>
                        </div>
                        <div className="grid grid-cols-3 gap-8 py-8">
                           {shopData.map((item, i) => (
                              <>
                                 <div
                                    key={i}
                                    className="flex flex-col pb-5"
                                 >
                                    <Image
                                       src={item.image}
                                       alt={'shopAdd'}
                                       className="w-full object-cover rounded"
                                       width={1000}
                                       height={1000}
                                       quality={100}
                                    />
                                    <div className="flex flex-col py-3">
                                       <span className="text-[#676666] text-sm pb-2 font-[700] uppercase">
                                          {item.category}
                                       </span>
                                       <Link href="#">
                                          <h4 className="text-[#0a303a] text-lg font-[700] pb-2">
                                             {item.name}
                                          </h4>
                                       </Link>
                                       <div className="flex w-full justify-between">
                                          <span className="text-[#282828] font-[700] text-sm">
                                             $ {item.price}.00
                                          </span>
                                          <Link
                                             href={`/shop/${item.id}`}
                                             className="text-[#f04336] font-[700] text-sm"
                                          >
                                             ADD +
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </>
                           ))}
                        </div>
                        <div className="flex w-full bg-[#f5f2eb] px-3 py-5 justify-between pb-5">
                           <div className="flex gap-5 items-center">
                              <div className="flex gap-3">
                                 <a
                                    href="#"
                                    className="flex items-center justify-center border border-[#e1e1e1] bg-white w-[33px] h-[32px] rounded hover:bg-[#f04336] hover:text-white"
                                 >
                                    <FaTh size={18} />
                                 </a>
                                 <a
                                    href="#"
                                    className="flex items-center justify-center border border-[#e1e1e1] bg-white w-[33px] h-[32px] rounded hover:bg-[#f04336] hover:text-white"
                                 >
                                    <FaListUl size={18} />
                                 </a>
                              </div>
                              <div className="flex items-center">
                                 <span
                                    className="text-xs font-[700]"
                                 >
                                    Total Items 1-12 of 13
                                 </span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <span
                                    className="text-xs font-[700]"
                                 >
                                    Show
                                 </span>
                                 <select
                                    id="countries_disabled"
                                    className="text-[#0a303a] text-sm rounded p-2.5 border border-[#e1e1e1] bg-white"
                                 >
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                    <option value="18">18</option>
                                    <option value="20">20</option>
                                 </select>
                              </div>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-xs">
                                 PAGINATION HERE COMING SOON
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default shop