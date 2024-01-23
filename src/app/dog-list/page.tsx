"use client"
import "../styles/doglist.modules.css";
import Image from "../../../node_modules/next/image";
import PawPrint from "../../../public/img/pawprint.png";
import h_PawPring from "../../../public/img/w_pawprint.png";
import faq_tv from '../../../public/img/faq_tv.png';
import faq_img from '../../../public/img/faq_img.png'
import breed_arrow from '../../../public/img/arrow.png'
import breed_bg_1 from '../../../public/img/breed_services_shape01.png'
import breed_bg_2 from '../../../public/img/breed_services_shape02.png'
import { FaCog, FaStar } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import Link from "next/link";
import { Button } from "../component";
import { useRef, useState } from "react";
import faq_shape from '../../../public/img/faq_shape.png'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function DogList() {
  const [dropdown, setDropdown] = useState(0);
  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const dropDown = (index: any) => {
    setDropdown((prevIndex) => (prevIndex === index ? null : index));
  }

  const dog = [
    {
      id: 0,
      img: "/img/adoption_shop_thumb01.jpg",
      name: "Mister Tartosh",
      breed: "Siberian Husky",
      birthdate: "Birth : 2021",
      total_price: "Free",
    },
    {
      id: 1,
      img: "/img/adoption_shop_thumb02.jpg",
      name: "Charlie",
      breed: "Golden Retriever",
      birthdate: "Birth : 2020",
      total_price: "$30",
    },
    {
      id: 2,
      img: "/img/adoption_shop_thumb03.jpg",
      name: "Alessua Max",
      breed: "German Shepherd",
      birthdate: "Birth : 2020",
      total_price: "$29",
    },
    {
      id: 3,
      img: "/img/adoption_shop_thumb04.jpg",
      name: "Canadian",
      breed: "German Shepherd",
      birthdate: "Birth : 2021",
      total_price: "$39",
    },
    {
      id: 4,
      img: "/img/adoption_shop_thumb05.jpg",
      name: "Entertainment",
      breed: "Golden Retriever",
      birthdate: "Birth : 2021",
      total_price: "Free",
    },
    {
      id: 5,
      img: "/img/adoption_shop_thumb06.jpg",
      name: "Dangerous",
      breed: "Golden Retriever",
      birthdate: "Birth : 2021",
      total_price: "Free",
    },
  ];

  const faq_question = [
    {
      id: 0,
      label: 'Working for dog adoption',
      description: 'The best overall dog DNA test is embark breed & health Kit (view atths Chewy), which provides you with a breed brwn and ition on provides ancestors most dogs.',
    },
    {
      id: 1,
      label: 'Competitions & Awards',
      description: 'The best overall dog DNA test is embark breed & health Kit (view atths Chewy), which provides you with a breed brwn and ition on provides ancestors most dogs.',
    },
    {
      id: 2,
      label: 'The puppies are 3 months old',
      description: 'The best overall dog DNA test is embark breed & health Kit (view atths Chewy), which provides you with a breed brwn and ition on provides ancestors most dogs.',
    },
  ]

  const breed_dogs = [
    {
      id: 0,
      breed: 'Golden Retriever',
      breed_img: '/img/breed_services_img01.jpg'
    },
    {
      id: 1,
      breed: 'German Shepherd',
      breed_img: '/img/breed_services_img02.jpg'
    },
    {
      id: 2,
      breed: 'Siberian Husky',
      breed_img: '/img/breed_services_img03.jpg'
    },
    {
      id: 3,
      breed: 'Bernes Mountain',
      breed_img: '/img/breed_services_img04.jpg'
    }
  ]

  return (
    <main>

      {/* Dog List */}

      <section className="adoption-bg w-full pt-[110px] pb-[60px]">
        <div className="container max-w-[540px] md:max-w-[960px] lg:max-w-[1230px]">
          <div className="flex flex-row justify-center">
            <div className="w-9/12 xl:w-7/12">
              <div className="mb-[65px] text-center ">
                <div className="mb-[10px] section-icon flex justify-center">
                  <Image src={PawPrint} alt={"/"} className="max-w-[28px]" />
                </div>
                <h5 className="text-[24px] font-extrabold text-[#f04336] mb-[12px] font-nunito">
                  Meet the animals
                </h5>
                <h2 className="text-[45px] mb-[22px] leading-[1.2] font-nunito font-extrabold text-[#0a303a]">
                  Puppies Waiting for Adoption
                </h2>
                <p className="text-[16px] text-[#676666] ">
                  The best overall dog DNA test is Embark Breed & Health Kit (view
                  at Chewy), which provides you with a breed brwn and information
                  Most dogs
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[30px]">
            {/* Outer group */}
            {dog.map((item, index) => {
              return (
                <div key={item.id} className="mb-[50px] group/outer">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-full h-full rounded bg-[#f4f1ea] opacity-0 ease-linear duration-300 group-hover:opacity-[.57]"></div>
                    <Image
                      src={item.img}
                      alt={item.breed}
                      className="w-full object-cover rounded"
                      width={1000}
                      height={1000}
                      quality={100}
                    />
                    {/* Inner group */}
                    <div
                      className="absolute left-1/2 top-[40%] opacity-0 transform -translate-x-1/2 -translate-y-1/2 z-[2] duration-300 ease-in-out bg-[#f04336] 
                      rounded-[3px] text-[20px] text-white font-extrabold font-nunito inline-flex items-center py-[17px] px-[25px] text-center whitespace-nowrap cursor-pointer
                      overflow-hidden group-hover/outer:opacity-[1] group-hover/outer:top-1/2 group/inner"
                    >
                      Adoption
                      <Image
                        src={h_PawPring}
                        alt={"/"}
                        className="max-w-[20px] ml-[10px]"
                      />
                      <div className="absolute duration-700 w-[200%] h-[200%] left-[50%] top-[110%] bg-[#0a303a] transform -translate-x-1/2 rounded-[50%] z-[-1] group-hover/inner:top-[-40%]"></div>
                    </div>
                    {/* <Button 
                      label="Adoption"
                      className="absolute left-1/2 top-[40%] opacity-0 transform -translate-x-1/2 -translate-y-1/2 z-[2] duration-300 ease-in-out bg-[#f04336] 
                      rounded-[3px] text-[20px] text-white font-extrabold font-nunito inline-flex items-center py-[17px] px-[25px] text-center whitespace-nowrap cursor-pointer
                      overflow-hidden group-hover/outer:opacity-[1] group-hover/outer:top-1/2 group/inner"
                      icon={<Image
                        src={h_PawPring}
                        alt={"/"}
                        className="max-w-[20px] ml-[10px]"
                      />}
                      iconPlacement='right'
                    /> */}
                  </div>
                  <div className="relative z-[1] rounded-[10px] bg-white mt-[-48px] mx-[24px] px-[25px] pt-[25px] pb-[30px] shadow-sm">
                    <h4 className="text-center text-[22px] text-[#f04336] mb-[17px] font-nunito font-black hover:text-[#0a303a]">
                      <Link href={""}>{ item.name }</Link>
                    </h4>
                    <ul className="flex justify-between items-center pb-[15px] border-[#e1e1e1] border-b-[1px] mb-[15px]">
                      <li className="flex flex-row items-center">
                        <FaCog size={13} className="mr-[6px]"></FaCog>
                        <Link
                          href={""}
                          className="hover:text-[#f04336] text-[13px]"
                        >
                          { item.breed }
                        </Link>
                      </li>
                      <li className="flex flex-row items-center">
                        <BiCalendar size={13} className="mr-[6px]"></BiCalendar>
                        <span className="text-[13px]">{ item.birthdate }</span>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-between">
                      <li className="flex flex-row items-center">
                        <FaStar size={12} className="text-[#f39c10]"></FaStar>
                        <FaStar size={12} className="text-[#f39c10]"></FaStar>
                        <FaStar size={12} className="text-[#f39c10]"></FaStar>
                        <FaStar size={12} className="text-[#f39c10]"></FaStar>
                        <FaStar size={12} className="text-[#f39c10]"></FaStar>
                      </li>
                      <li className="flex flex-row items-center text-[13px]">
                        Total Price:
                        <span className="text-[#0a303a] ml-1 font-semibold">
                          { item.total_price }
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#d5e6eb] relative py-[110px]">
        <div className="absolute top-0 left-0 w-full h-[24px] faq-question-bg z-[1]"></div>
        <div className="container">
          <div className="flex flex-row items-center mx-[-15px]">
            <div className="max-w-1/2 relative px-[15px] w-full">
              <div className="relative mr-[28px] z-[1]">
                <Image 
                  src={faq_tv}
                  alt={'/'}
                />
                <Image 
                  src={faq_img}
                  alt={'/'}
                  className="absolute max-w-[71%] left-[36px] bottom-[32px] z-[-1]"
                />
                <a href="" className="absolute w-[93px] h-[93px] right-[4.5%] top-[33.5%] rounded-[50%] z-[1]"></a>
              </div>
            </div>
            <div className="max-w-1/2 relative px-[15px] w-full">
              <div className="mb-[35px]">
                <h5 className="text-[24px] font-extrabold text-[#f04336] mb-[12px] font-nunito">FAQ Question</h5>
                <h2 className="text-[45px] font-nunito font-black text-[#0a303a]">History & Family Adoption</h2>
              </div>
              <div className="overflow-auto">
                {faq_question.map((item, index) => {
                  return (
                    <div key={item.id} className="overflow-hidden relative flex flex-col break-words border-[0] mb-[11px] bg-white rounded-md border-b-0">
                      <div className="bg-transparent border-b-0">
                        <h2 className="mb-0">
                          <button 
                          className="text-[20px] font-black text-[#0a303a] border-[0] bg-transparent w-full py-[20px] pr-[75px] pl-[30px] flex leading-[1.4] items-start relative whitespace-normal font-nunito"
                          onClick={() => dropDown(index)}
                          >
                            { item.label }
                            <div className={`absolute top-4 right-[25px] w-[40px] h-[37px] text-center leading-[37px]
                            font-nunito font-black transform ease-linear duration-300 btn-polygon ${dropdown === index ? "text-[#fff] bg-[#f04336] after:content-['-'] text-[30px] " : "text-[#f04336] after:content-['+'] text-[24px] bg-[#d5e6eb]"}`}></div>
                          </button>
                        </h2>
                      </div>
                      <div className={`overflow-hidden relative transition-all ease-in-out duration-500  ${dropdown === index ? "max-h-[1000px]" : "max-h-0"}`}>
                        <div className="px-[30px] pt-[20px] pb-[30px] text-[16px] test-[#676666] leading-[28px] border-[#eef5f7] border-t-[2px]">
                          { item.description }
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2%] right-[7%]">
          <Image 
            src={faq_shape}
            alt={'/'}
          />
        </div>
        <div className="absolute left-0 top-auto w-full h-6 faq-question-bg2 z-[1] bottom-0"></div>
      </section>

      {/* Breed Section */}

      <section className="relative py-[110px]">
        <div className="container">
          <div className="flex mx-[-15px] justify-center">
            <div className="w-9/12 xl:w-7/12">
              <div className="mb-[65px] text-center ">
                <div className="mb-[10px] section-icon flex justify-center">
                  <Image src={PawPrint} alt={"/"} className="max-w-[28px]" />
                </div>
                <h5 className="text-[24px] font-extrabold text-[#f04336] mb-[12px] font-nunito">
                  Service to Breeds
                </h5>
                <h2 className="text-[45px] mb-[22px] leading-[1.2] font-nunito font-extrabold text-[#0a303a]">
                  Most Popular Dog Breed
                </h2>
                <p className="text-[16px] text-[#676666] ">
                  The best overall dog DNA test is Embark Breed & Health Kit (view
                  at Chewy), which provides you with a breed brwn and information
                  Most dogs
                </p>
              </div>
            </div>
          </div>
          <div className="flex mx-[-15px] justify-center">
            <div className="w-8/12 px-[15px] relative">
              <button 
                type="button" 
                className="absolute border-none bg-transparent top-1/2 left-[-3%] transition ease-linear duration-300 z-[2] breed-arrow py-[20px] px-[16px]"
                onClick={handlePrevSlide}
                >
                <div className="hover-color-change">
                  <Image 
                    src={breed_arrow}
                    alt={'/'}
                    width={1000}
                    height={1000}
                    className='max-w-[47px]'
                  />
                </div>
              </button>
              <Swiper
                slidesPerView={2}
                slidesPerGroup={2}
                loop={true}
                spaceBetween={30}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                autop
                className="mySwiper"
              >
                {breed_dogs.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full">
                      <div>
                        <Image 
                          src={item.breed_img}
                          alt={item.breed}
                          width={1000}
                          height={1000}
                          quality={100}
                        />
                      </div>                      
                      <div className="absolute bottom-[30px] left-[30px] right-[30px] max-w-[223px] mx-auto my-0 text-center">
                        <h3 className="text-[22px] py-[16px] px-[21px] text-[#f04336] font-nunito font-black breed-rectangle whitespace-nowrap">
                          {item.breed}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>  
                ))}             
              </Swiper>
            </div>
            <div className="w-4/12 md:w-8/12 px-[15px] relative">
              <div className="py-[53px] px-[50px] rounded min-h-full breed-service-bg">
                <h5 className="mb-[13px] text-[18px] pl-[10px] leading-[1] font-nunito font-black text-white border-l-[3px] border-white">Dog Breeder</h5>
                <h3 className="text-[#fff] mb-[12px] text-[40px] leading-[1.1] font-black font-nunito">Available for Breed</h3>
                <p className="text-[#fff] mb-[30px] text-[16px] leading-[28px]">
                  The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provid dogs
                </p>
                <div
                  className="absolute z-[2] duration-300 ease-in-out bg-white 
                  rounded-[3px] text-[20px] text-[#f04336] hover:text-white font-extrabold font-nunito inline-flex items-center py-[17px] px-[25px] text-center whitespace-nowrap cursor-pointer
                  overflow-hidden group/breed"
                >
                  More Pets
                  <Image
                    src={h_PawPring}
                    alt={"/"}
                    className="max-w-[20px] ml-[10px]"
                  />
                  <div className="absolute duration-700 w-[200%] h-[200%] left-[50%] top-[110%] bg-[#0a303a] transform -translate-x-1/2 rounded-[50%] z-[-1] group-hover/breed:top-[-40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[-5%] z-[-1] ">
          <Image 
            src={breed_bg_1}
            alt={'Breed Service BG'}
            quality={100}
          />
        </div>
        <div className="absolute top-[-7%] left-auto right-0 z-[-1]">
          <Image 
            src={breed_bg_2}
            alt={'Breed Service BG 2'}
            quality={100}
          />
        </div>
      </section>

      {/* News Letter */}

      <div className="pb-[110px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full max-w-full relative px-[15px]">
              <div className="flex items-center border-[1.5px] border-[#0a303a] rounded-[15px] py-[65px] pr-[85px] pl-[60px] relative news-letter-bg">
                <div className="w-[34.5%]">
                  <h2 className="text-white text-[40px] mb-[8px] leading-[1.1] font-nunito font-black">Newsletter For</h2>
                  <p className="text-[14px] text-white font-semibold leading-[1.5] flex items-end">
                    <span className="font-nunito font-black text-[20px] leading-[.6] mr-[8px]">*</span>
                    Do Not Show Your Email
                  </p>
                </div>
                <div className="w-[65.5%]">
                  <form action="" className="flex items-center">
                    <input placeholder="Enter your Email..." className="flex-grow border-none bg-white news-letter-polygon py-[21px] px-[30px] text-[#676666] text-[24px] rounded-[10px] rounded-br-[35px]" type="text" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
