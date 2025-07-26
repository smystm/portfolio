import React from 'react'
import Button from '../ui/buttons'
import Link from 'next/link'

function FormTtl() {
    return (
        <div className='flex flex-col gap-1'>
            <h4 className="flex justify-between font-bold text-xl sm:text-2xl lg:text-3xl bg-gradient-to-l from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                <span>ایمیل بزن</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 lucide-share-2 w-10 h-10 text-[#6366f1] opacity-50"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
            </h4>
            <p className="w-full font-small text-sm md:text-md lg:text-lg text-gray-400">
                قول نمی‌دیم سریع‌ترین باشیم، ولی جواب می‌دیم حتما! :)
            </p>
        </div>
    )
}

type propsForm= {
    children: React.ReactNode,
}

function Form({children}:propsForm) {
  return (
    <form className='flex flex-col gap-4 py-6'> 
        {children}
    </form>
  )
}

type propsInput= {
    children: React.ReactNode,
    id: string,
    placeHolder: string,
    type?: string,
    textarea?: boolean

}
function FormInput({children, id, placeHolder, type, textarea}:propsInput) {
  return (
    <div className='w-full relative rounded-2xl group transation-all duration-300'>
        <label className='absolute right-3 top-7 translate-y-[-50%] text-sm font-semibold text-gray-300 transation-all duration-300' htmlFor={id}>{children}</label>
        {textarea? 
        <textarea rows={5} className='w-full bg-white/10 pr-12 px-3 py-4 resize-none border border-white/10 rounded-2xl text-gray-300 focus:border-[#6366f1] h-full outline-none fous:text-white transation-all duration-300' placeholder={placeHolder} id={id}></textarea>
        :
        <input className='w-full bg-white/10 pr-12 px-3 py-4 border border-white/10 rounded-2xl text-gray-300 focus:border-[#6366f1] focus:outline-none fous:text-white transation-all duration-300' placeholder={placeHolder} id={id} type={type ?? "text"} />
        }      
    </div>
  )
}

function FormSubmit() {
  return (
    <Button name='ارسال پیام' type='submit' className='w-full flex items-center justify-center text-center gap-3 bg-[#6366f1] text-white py-4 rounded-2xl hover:bg-[#4f46e5] hover:cursor-pointer transation-all duration-300' choose='none' send='none'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
    </Button>
  )
}

function FormContact(){
    return (
        <div className="flex flex-col px-8 gap-4 py-6 bg-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <hr className='text-indigo-500 bg-indigo-500 rounded-full my-4 w-8 h-1' />
            <span className="text-md md:text-lg lg:text-xl text-white">در ارتباط باشید</span>
          </div>
          <div className="flex flex-col gap-3">
            <Contact name='اینستاگرام' desc='@smy_shadow' color='#e4405f12'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e4405f] w-6 h-6 transition-all duration-500 group-hover:scale-105"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </Contact>
            <Contact name='گیت هاب' desc='@smystm' color='#ffffff12'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6 transition-all duration-500 group-hover:scale-105"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </Contact>
          </div>
        </div>
    )
}

type propsContact= {
  children: React.ReactNode
  name: string
  desc: string
  color: string
  href?: string
}

function Contact({children, name, desc, color, href}:propsContact) {
  return (
    <Link href={href ?? "#"} className="relative group flex gap-4 py-3 px-3 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 hover:cursor-pointer transition-all duration-300">
      <div className={`flex items-center vertical-middle p-2 bg-[${color}] inset-0 rounded-md transition-all duration-500 hover:scale-110 rounded-lg`}>
        {children}
       </div>
       <div className="flex flex-col justify-center text-gray-300">
         <p className='m-0 text-white font-semibold text-md'>{name}</p>
         <span className='m-0 font-medium text-sm text-gray-400'>{desc}</span>
      </div>
    </Link>
  )
}

export {FormTtl, Form, FormInput, FormSubmit, FormContact}