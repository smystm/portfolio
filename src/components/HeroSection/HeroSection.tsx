import React from 'react'

export default function  HeroSection() {
  return (
    <>
        <section className='HeroSection w-full max-w-[1440px] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center
        h-screen md:justify-between gap-4 px-[5%] sm:px-6 lg:px-[5%]'>
            <div className='w-full lg-w-1/2 flex flex-col space-y-4 sm:space-y-8 text-right md:text-right order-1'>
                <div className='space-y-2'>
                  <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111827] dark:text-white'>
                    <span className='relative inline-block bg-gradient-to-r from-[#ffffff] to-[#f9f9f9] bg-clip-text text-transparent'>توسعه دهنده </span>
                    <br />
                    <span className='relative inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mt-2'>فرانت اند </span>
                  </h1>               
                </div>
                <div className=''></div>
            </div>
            <div className=''>2</div>
        </section>
    </>
  )
}
