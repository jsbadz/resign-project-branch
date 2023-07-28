import '../styles/doglist.modules.css'
import Image from '../../../node_modules/next/image'
import PawPrint from '../../../public/img/pawprint.png'


export default function DogList() {
  return (
    <section className="adoption-bg w-full pt-[110px] pb-[60px]">
      <div className="container">
        <div className='flex flex-row justify-center'>
          <div>
            <div className='mb-[65px] text-center '>
              <div className='mb-[10px] section-icon flex justify-center'>
                <Image
                  src={PawPrint}
                  alt={'/'}
                  className='max-w-[28px]'
                />
              </div>
              <h5 className='text-[24px] font-extrabold text-[#f04336] mb-[12px]'>Meet the animals</h5>
              <h2 className='text-[45px] mb-[22px] leading-[1.2]'>Puppies Waiting for Adoption</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 