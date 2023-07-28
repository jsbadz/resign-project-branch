import React from 'react'
import { Menu } from './partials/Menu'
import { Footer } from './partials/Footer'

export default function DefaultLayout(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Menu />
      <div className="relative flex-grow overflow-x-hidden">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
