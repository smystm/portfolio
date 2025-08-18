import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col items-baseline justify-between gap-4 px-5 py-6 text-center border-t md:text-start md:flex-row md:justify-between lg:justify-center border-white/10'>
       <span>♡ این سایت توسط وب لب سیتی با عشق ساخته شده. همه حقوقش هم برای ماست ♡ :)</span>
       <span className='hidden text-gray-600 scale-y-150 md:flex'> | </span>
       <span className='w-full md:w-fit'> 2025 © </span>
    </footer>
  )
}
