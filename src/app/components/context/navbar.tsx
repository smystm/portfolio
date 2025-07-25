import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='fixed top-0 z-20 h-16 w-full md:block bg-[#030014]/50 backdrop-blur-xl transition-all duration-500 border-b border-white/5'>
        <div className="flex flex-row-reverse md:flex-row flex-wrap items-center h-16 justify-between max-w-screen-xl md:mx-auto px-4">
            <div className="felx justify-center md:items-center">
                <h1 className='text-md md:text-lg font-bold bg-gradient-to-l from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent'>وب لب سیتی <span className='hidden md:inline'>| تیم توسعه و طراحی</span></h1>
            </div>
            <div className="hidden md:flex flex-wrap items-center justify-between gap-5">
              <NavLink href='#home' id='link-home' idBorder='border-home' context='خونه' />
              <NavLink href='#about' id='link-about' idBorder='border-about' context='درباره ما' />
              <NavLink href='#showcase' id='link-showcase' idBorder='border-showcase' context='تیم ما' />
              <NavLink href='#contact' id='link-contact' idBorder='border-contact' context='ارتباط با ما' /> 
            </div>
            <div className="block md:hidden">
            <button className="p-2 text-[#e2d3fd group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="menu w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
              <div className="absolute z-30 scale-x-0 group-focus:scale-x-100 right-0 top-0 group-focus:w-7/10 group-focus:sm:w-1/2 group-focus:block h-screen bg-[#111827]/95 backdrop-blur-xl transform origin-right transition-all duration-200">
                <div className='w-full h-full flex flex-col'>
                  <div className="flex justify-center items-center py-5 px-2 border-b border-0.5 border-white/5">
                    <span className='text-md sm:text-lg font-bold bg-gradient-to-l from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent'>تیم توسعه و طراحی</span>
                  </div>
                  <div className="flex flex-col gap-2 px-3 py-4">
                    <NavLink href='#home' id='menu-link-home' idBorder='menu-border-home' context='خونه' />
                    <NavLink href='#about' id='menu-link-about' idBorder='menu-border-about' context='درباره ما' />
                    <NavLink href='#showcase' id='menu-link-showcase' idBorder='menu-border-showcase' context='تیم ما' />
                    <NavLink href='#contact' id='menu-link-contact' idBorder='menu-border-contact' context='ارتباط با ما' />
                  </div>
                </div>
              </div>
            </button>
            </div>
        </div>
    </nav>
  )
}

type props = {
  id: string
}
function SubBorder({id}: props) {
  return (
    <div id={id} className="absolute hidden md:block right-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] transform origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
  )
}

type propsLink = {
  href: string
  id: string
  idBorder: string
  context: string
}
function NavLink({href, id, idBorder, context}: propsLink) {
  return (
    <>
    <Link href={href} className="group relative ml-4 px-1">
      <span id={id} className='flex items-center py-2 text-sm md:text-md font-medium rounded-lg outline-none transition-all duration-300'>{context}</span>
      <SubBorder id={idBorder} />
    </Link>
    </>
  )
}