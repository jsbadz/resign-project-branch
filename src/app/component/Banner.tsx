"use client"
import { useEffect } from "react"
import { usePathname } from '../../../node_modules/next/navigation'
import { log } from "console"


export default function Banner() {
  const router = usePathname()
  const banner = '/img/banner.jpg'

  console.log(router)
  return (
    <div style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover'
    }}
      className={`w-screen h-[25rem]`}>
      <div className="flex container w-full h-full items-center px-[15px] mx-auto">
        <div className="flex flex-row">
          <div className="col-12">
            <div className="relative left-[8rem]">
              <h2 className="custom-rounded1 text-[36px] mb-[18px] text-white font-[800] bg-[#f04336]">Get Adoption</h2>
              <ul className="flex flex-wrap rounded bg-transparent">
                <li className="font-[700] text-[16px]">
                  <a href="/" className="pr-2 text-[#f04336]">Home</a>
                </li>
                <p className="text-[#f04336]">|</p>
                <li className="font-[700] text-[16px]">
                  <a href="/adoption" className="pl-2 text-white">Adoption</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}