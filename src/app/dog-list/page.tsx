import '../styles/doglist.modules.css'
import Image from '../../../node_modules/next/image'
import PawPrint from '../../../public/img/pawprint.png'
import h_PawPring from '../../../public/img/w_pawprint.png'



export default function DogList() {
  const dog1 = '/img/adoption_shop_thumb01.jpg'
  return (
    <section className="adoption-bg w-full pt-[110px] pb-[60px]">
      <div className="container max-w-[540px] md:max-w-[960px] lg:max-w-[1230px]">
        <div className='flex flex-row justify-center'>
          <div className='w-9/12 xl:w-7/12'>
            <div className='mb-[65px] text-center '>
              <div className='mb-[10px] section-icon flex justify-center'>
                <Image
                  src={PawPrint}
                  alt={'/'}
                  className='max-w-[28px]'
                />
              </div>
              <h5 className='text-[24px] font-extrabold text-[#f04336] mb-[12px] font-nunito'>Meet the animals</h5>
              <h2 className='text-[45px] mb-[22px] leading-[1.2] font-nunito font-extrabold text-[#0a303a]'>Puppies Waiting for Adoption</h2>
              <p className='text-[16px] text-[#676666] '>
              The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
          {/* Outer group */}
          <div className='mb-[50px] group/outer'>
            <div className='relative'>
              <div className='absolute left-0 top-0 w-full h-full rounded bg-[#f4f1ea] opacity-0 ease-linear duration-300 group-hover:opacity-[.57]'></div>
              <Image 
                src={dog1}
                alt={'dog1'}
                className="w-full object-cover rounded"
                width={1000}
                height={1000}
                quality={100}
              />
              {/* Inner group */}
              <div className='absolute left-1/2 top-[40%] opacity-0 transform -translate-x-1/2 -translate-y-1/2 z-[2] duration-300 ease-in-out bg-[#f04336] 
              rounded-[3px] text-[20px] text-white font-extrabold font-nunito inline-flex items-center py-[17px] px-[25px] text-center whitespace-nowrap cursor-pointer
              overflow-hidden group-hover/outer:opacity-[1] group-hover/outer:top-1/2 group/inner'>
                Adoption
                <Image 
                  src={h_PawPring}
                  alt={'/'}
                  className='max-w-[20px] ml-[10px]'
                />
                <div className='absolute duration-700 w-[200%] h-[200%] left-[50%] top-[110%] bg-[#0a303a] transform -translate-x-1/2 rounded-[50%] z-[-1] group-hover/inner:top-[-40%]'></div>
              </div>
            </div>
            <div className='relative z-[1] rounded-[10px] bg-white mt-[-48px] mx-[24px] px-[25px] pt-[25px] pb-[30px] shadow-sm'>
              <h4 className='text-center text-[22px] text-[#f04336] mb-[17px] font-nunito font-black hover:text-[#0a303a]'>Mister Tartosh</h4>
              <ul className='flex justify-between items-center pb-[15px] border-[#e1e1e1] border-b-[1px] mb-[15px]'>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 