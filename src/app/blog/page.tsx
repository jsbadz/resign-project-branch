import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiBell, BiCalendar, BiChevronsRight, BiMinus } from 'react-icons/bi'
import { IoMdSearch } from 'react-icons/io'
import { HiOutlineUser } from 'react-icons/hi'
import PawPrint from '../../../public/img/pawprint.png'

const blog = () => {

   const newsletter = '/img/sn_icon.png'
   const thumbnail01 = '/img/blog_thumb01.jpg'


   const categories = [
      {
         name: "Siberian Husky",
         url: ""
      },
      {
         name: "German Sherped",
         url: ""
      },
      {
         name: "French Bulldog",
         url: ""
      },
      {
         name: "Golden Retriever",
         url: ""
      },
   ]

   const recentPost = [
      {
         image: "/img/rc_post_thumb01.jpg",
         title: "Best Online Pet Everything Your Pet Needs",
         date: "April 15, 2021",
         author: "Admin"
      },
      {
         image: "/img/rc_post_thumb02.jpg",
         title: "Pet Needs Special Food like Human Foods",
         date: "September 13, 2021",
         author: "Admin"
      },
   ]

   const blogData = [
      {
         image: "/img/blog_thumb01.jpg",
         breed: "Siberian Husky",
         author: "Admin",
         date: "March 10, 2021",
         title: "Online pet everything your pet needs",
         description: "The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers.",
         url: "/"
      },
      {
         image: "/img/blog_thumb02.jpg",
         breed: "Siberian Husky",
         author: "Admin",
         date: "March 10, 2021",
         title: "Pet needs special food like human foods",
         description: "The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers.",
         url: "/"
      },
      {
         image: "/img/blog_thumb03.jpg",
         breed: "Siberian Husky",
         author: "Admin",
         date: "March 10, 2021",
         title: "Special grades for carry-home food",
         description: "The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers.",
         url: "/"
      },
   ]


   return (
      <div className="w-full pt-[110px] pb-[60px]">
         <div className="container max-w-[540px] md:max-w-[960px] lg:max-w-[1230px]">
            <div className="flex flex-row w-full  gap-5">
               <div className='flex max-w-[67%]'>
                  <div className="flex flex-col">
                     {blogData.map((item, i) => (
                        <>
                           <div key={i} className="pb-[50px]">
                              <div className="pb-5">
                                 <Image
                                    src={item.image}
                                    alt={'test'}
                                    className="max-w-full h-auto rounded"
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                 />
                              </div>
                              <div className="flex flex-col">
                                 <div className="flex pb-5">
                                    <nav className="flex py-3" aria-label="Breadcrumb">
                                       <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                          <li className="inline-flex items-center">
                                             <a href="#" className="inline-flex items-center text-sm text-[#838181] hover:text-[#f04336]">
                                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                   <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                </svg>
                                                {item.breed}
                                             </a>
                                          </li>
                                          <li>
                                             <div className="flex items-center">
                                                /
                                                <a href="#" className="flex items-center gap-1 text-sm text-[#838181] hover:text-[#f04336] md:ml-2">
                                                  <HiOutlineUser /> {item.author}
                                                </a>
                                             </div>
                                          </li>
                                          <li aria-current="page">
                                             <div className="flex items-center">
                                                /
                                                <span className="flex items-center gap-1 ml-1 text-sm text-[#838181] md:ml-2">
                                                   <BiBell /> {item.date}
                                                </span>
                                             </div>
                                          </li>
                                       </ol>
                                    </nav>
                                 </div>
                                 <Link
                                    href="#"
                                    className="text-4xl text-[#0a303a] font-[800] pb-8 hover:text-[#f04336]">
                                    {item.title}
                                 </Link>
                                 <p className="pb-8">
                                    {item.description}
                                 </p>
                                 <Link
                                    href={item.url}
                                    className="flex gap-2 text-[#f04336] text-md font-[800]"
                                 >
                                    Read More
                                    <Image
                                       src={PawPrint}
                                       alt={'/'}
                                       className='max-w-[24px] rotate-90'
                                    />
                                 </Link>
                              </div>
                           </div>
                        </>
                     ))}
                  </div>
               </div>
               <div className='flex flex-col w-full max-w-[33%] space-y-8'>
                  <div className="flex flex-col w-full bg-[#f5f2eb] rounded-md py-[40px] px-[30px]">
                     <div className="flex">
                        <h6 className="text-xl font-[600] text-[#0a303a] pb-5">
                           Search
                        </h6>
                        {/* <BiMinus size={24} />
                        <BiMinus size={24} /> */}
                     </div>
                     <div className="relative mb-4 flex w-full flex-wrap ">
                        <input
                           type="search"
                           className="relative bg-white m-0 -mr-0.5 block w-[1px] h-[60px] min-w-0 flex-auto rounded-l border-[#1e4b57] text-black px-3 py-[0.25rem] text-base outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#f04336] focus:outline-none "
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
                  </div>
                  <div className="flex flex-col w-full bg-[#f5f2eb] rounded-md py-[40px] px-[30px]">
                     <div className="flex">
                        <h6 className="text-xl font-[600] text-[#0a303a] ">
                           Categories
                        </h6>
                     </div>
                     {categories.map((item, i) => (
                        <>
                           <div className="flex flex-col w-full border-b border-dashed pb-5 pt-5">
                              <Link
                                 href={item.url}
                                 className="flex items-center justify-between cursor-pointer hover:text-[#f04336] "
                              >
                                 {item.name}
                                 <BiChevronsRight />
                              </Link>
                           </div>
                        </>
                     ))}
                  </div>

                  <div className="flex flex-col w-full bg-[#f5f2eb] rounded-md py-[40px] px-[30px]">
                     <div className="flex pb-5">
                        <h6 className="text-xl font-[600] text-[#0a303a] ">
                           Recent Post
                        </h6>
                     </div>
                     <div className="flex flex-col">
                        {recentPost.map((item, i) => (
                           <>
                              <div className="flex flex-col pb-5">
                                 <div className="cursor-pointer">
                                    <Image
                                       src={item.image}
                                       alt={'shopAdd'}
                                       className="w-full object-cover rounded"
                                       width={1000}
                                       height={1000}
                                       quality={100}
                                    />
                                 </div>
                                 <div className="py-5">
                                    <h4 className="text-[#0a303a] font-[800] text-lg pb-3">
                                       {item.title}
                                    </h4>
                                    <div className="flex gap-5">
                                       <span className="flex items-center gap-2">
                                          <BiCalendar size={20} className="text-[#f04336]" />
                                          {item.date}
                                       </span>
                                       <span className="flex gap-2">
                                          By
                                          <span className="text-[#f04336] font-[600]">
                                             {item.author}
                                          </span>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </>
                        ))}
                     </div>
                  </div>
                  <div className="flex flex-col w-full bg-[#143556] rounded-md py-[40px] px-[30px]">
                     <div className="flex w-full justify-center pb-8">
                        <div className="flex w-[210px] h-auto">
                           <Image
                              src={newsletter}
                              alt={'test'}
                              className="max-w-full h-auto rounded"
                              width={1000}
                              height={1000}
                              quality={100}
                           />
                        </div>
                     </div>
                     <div className="flex flex-col justify-center text-center pb-8">
                        <h4 className="text-white text-2xl font-[800]">
                           Subscribe Newsletter
                        </h4>
                        <span className="text-white text-sm font-[500]">
                           Sign-up For Latest News
                        </span>
                     </div>
                     <div className="flex flex-col gap-3">
                        <input
                           type="email"
                           className=" bg-white m-0 -mr-0.5 block w-full justify-center text-center h-[60px] min-w-0 flex-auto rounded-xl border-[#1e4b57] text-black px-3 py-[0.25rem] text-base outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#f04336] focus:outline-none "
                           placeholder="Enter your Email"
                           aria-label="email"
                           aria-describedby="button-addon1"
                        />
                        <button
                           className="w-full text-white text-md font-[800] bg-[#f04336] h-[60px] rounded-xl"
                        >
                           Subscribe
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default blog