import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
const Cart = (props: { count: any; className: any; onClick: any; }) => {
   const { count, onClick } = props
   return (
      <>
         <div
            className="flex justify-center items-center rounded-full text-black relative p-2 bg-default-purple cursor-pointer"
            onClick={() => onClick()}
         >
            <AiOutlineShoppingCart size={26} />
            <div className="flex justify-center items-center rounded-full text-black w-6 h-6 bg-default-yellow text-xs absolute -top-2 -right-3 font-semibold">
               {count <= 9 ? count : "9+"}
            </div>
         </div>
      </>
   )
}

export default Cart