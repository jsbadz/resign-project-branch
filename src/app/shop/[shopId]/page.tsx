"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

const shopDetails = () => {
   const shopAdd = '/img/shop_item01.jpg'
   const shopAdd2 = '/img/shop_item03.jpg'
   const shopAdd3 = '/img/shop_item02.jpg'
   const shopAdd4 = '/img/shop_item04.jpg'

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index) => {
      setActiveTab(index);
   };

   const tabItems = [
      "Details More",
      "Informaion",
      "Reviews (0)",
   ]
   const tabContent = [
      "DETAILS MORE TAB The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest include the core vaccines, which are administered.",
      "INFORMATION TAB The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest include the core vaccines, which are administered.",
      "REVIEWS TAB The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest include the core vaccines, which are administered.",
   ]

   const relatedData = [
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
   ]

   return (
      <>
         {/* <Banner></Banner> */}
         <div className="w-full pt-[110px] pb-[60px]">
            <div className="container max-w-[540px] md:max-w-[960px] lg:max-w-[1230px]">
               <div className="flex flex-row w-full max-h-full space-x-10 pb-10">
                  <div className="flex w-full max-w-[53%] px-3">
                     <div className="flex flex-col w-full">
                        <Image
                           src={shopAdd}
                           alt={'shopAdd'}
                           className="w-full object-cover rounded"
                           width={1000}
                           height={1000}
                           quality={100}
                        />
                        <div className="grid grid-cols-4 gap-3 pt-3">
                           <div className="cursor-pointer">
                              <Image
                                 src={shopAdd}
                                 alt={'shopAdd'}
                                 className="w-full object-cover rounded"
                                 width={1000}
                                 height={1000}
                                 quality={100}
                              />
                           </div>
                           <div className="cursor-pointer">
                              <Image
                                 src={shopAdd2}
                                 alt={'shopAdd'}
                                 className="w-full object-cover rounded"
                                 width={1000}
                                 height={1000}
                                 quality={100}
                              />
                           </div>
                           <div className="cursor-pointer">
                              <Image
                                 src={shopAdd3}
                                 alt={'shopAdd'}
                                 className="w-full object-cover rounded"
                                 width={1000}
                                 height={1000}
                                 quality={100}
                              />
                           </div>
                           <div className="cursor-pointer">
                              <Image
                                 src={shopAdd4}
                                 alt={'shopAdd'}
                                 className="w-full object-cover rounded"
                                 width={1000}
                                 height={1000}
                                 quality={100}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col w-full max-w-[47%] px-3">
                     <div className="flex flex-col w-full">
                        <h6 className="text-sm font-[800] text-[#676666] pb-5 uppercase">
                           Hand Satinizer
                        </h6>
                        <h4 className="text-4xl font-[900] text-[#0a303a] pb-5">
                           Pet Knit Knacks
                        </h4>
                        <div className="flex items-center pb-5">
                           <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                              ( 01 Review )
                           </p>
                        </div>
                        <div className="flex items-center gap-2 pb-5">
                           <span className="text-[#0a303a] text-2xl font-[700]">
                              $52.00
                           </span>
                           <span className="text-xs text-[#f04336] font-[700]">
                              - IN Stock
                           </span>
                        </div>
                        <p className="text-[#676666] text-[14px] leading-6 pb-5">
                           The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest living relative.
                        </p>
                        <div className="flex flex-col pb-5">
                           <h6 className="text-[#0a303a] text-base pb-2 font-[600]">
                              Dimension :
                           </h6>
                           <div className="flex gap-2">
                              <button className="border bg-[#f5f2eb] text-[#676666] text-sm font-[600] hover:bg-black hover:text-white px-5 py-2">
                                 Large
                              </button>
                              <button className="border bg-[#f5f2eb] text-[#676666] text-sm font-[600] hover:bg-black hover:text-white px-5 py-2">
                                 Medium
                              </button>
                              <button className="border bg-[#f5f2eb] text-[#676666] text-sm font-[600] hover:bg-black hover:text-white px-5 py-2">
                                 Small
                              </button>
                           </div>
                        </div>
                        <div className="flex flex-col pb-5">
                           <h6 className="text-[#0a303a] text-base pb-2 font-[600]">
                              Color :
                           </h6>
                           <div className="flex gap-2">
                              <button className="border-2 border-[#e84c3d] h-[37px] w-[37px] rounded-md bg-[#e84c3d] text-sm font-[600] hover:border-2 hover:border-black px-5 py-2">

                              </button>
                              <button className="border-2 border-[#485566] h-[37px] w-[37px] rounded-md bg-[#485566] text-sm font-[600] hover:border-2 hover:border-black px-5 py-2">

                              </button>
                              <button className="border-2 border-[#8dd244] h-[37px] w-[37px] rounded-md bg-[#8dd244] text-sm font-[600] hover:border-2 hover:border-black px-5 py-2">

                              </button>
                              <button className="border-2 border-[#50b1f9] h-[37px] w-[37px] rounded-md bg-[#50b1f9] text-sm font-[600] hover:border-2 hover:border-black px-5 py-2">

                              </button>
                           </div>
                        </div>
                        <div className="flex flex-col pb-5">
                           <h6 className="text-[#0a303a] text-base pb-2 font-[600]">
                              Quantity :
                           </h6>
                           <div className="flex gap-2">
                              <button className="flex items-center bg-white hover:bg-[#f04336] hover:text-white text-xs font-[700] border rounded px-5 py-3 gap-3">
                                 <AiFillHeart /> Add to Wishlist
                              </button>
                              <button className="flex items-center text-white bg-black hover:bg-[#f04336] text-xs font-[700] border rounded px-5 py-3 gap-3">
                                 Add to Cart +
                              </button>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 py-5 ">
                           <h6 className="text-[#0a303a] text-base font-[600]">
                              Categories :
                           </h6>
                           <Link href="#" className="text-sm text-[#a6a6a6] hover:text-[#f04336] font-[600]">
                              Dog Toys
                           </Link>
                        </div>
                        <div className="flex items-center gap-2 pb-5">
                           <h6 className="text-[#0a303a] text-base font-[600]">
                              SKU :
                           </h6>
                           <Link href="#" className="text-sm text-[#a6a6a6] hover:text-[#f04336] font-[600]">
                              H#21546
                           </Link>
                        </div>
                        <div className="flex items-center gap-2 pb-5">
                           <h6 className="text-[#0a303a] text-base font-[600]">
                              Share Now :
                           </h6>
                           <Link href="#" className="text-sm border-2 rounded-full p-2 text-[#a6a6a6] hover:text-[#f04336] hover:border-[#f04336] font-[600]">
                              <BiLogoFacebook className="" size={18} />
                           </Link>
                           <Link href="#" className="text-s border-2 rounded-full p-2 text-[#a6a6a6] hover:text-[#f04336] hover:border-[#f04336] font-[600]">
                              <BiLogoTwitter className="" size={18} />
                           </Link>
                           <Link href="#" className="text-sm border-2 rounded-full p-2 text-[#a6a6a6] hover:text-[#f04336] hover:border-[#f04336] font-[600]">
                              <BiLogoLinkedin className="" size={18} />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col w-full space-y-10 py-[50px]">
                  <div className="flex gap-5 border-b border-[#a6a6a6]">
                     {tabItems.map((item, index) => (
                        <div
                           key={index}
                           className={`cursor-pointer ${index === activeTab ? "text-[#f04336] border-b-2 border-[#f04336] w-auto text-lg font-[700] transition ease-out duration-500" : "text-lg font-[700] pb-3"}`}
                           onClick={() => handleTabClick(index)}
                        >
                           {item}
                        </div>
                     ))}
                  </div>
                  <p className="text-sm leading-6">
                     {tabContent[activeTab]}
                  </p>
               </div>
               <div className='flex flex-col'>
                  <h3 className="text-2xl font-[900] text-[#0a303a] pb-5">
                     Related Products
                  </h3>
                  <div className="grid grid-cols-4 gap-8">
                     {relatedData.map((item, i) => (
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
               </div>
            </div>
         </div>
      </>
   )
}

export default shopDetails