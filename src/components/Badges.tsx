import { ReactNode } from 'react'
import Bgradient from './Bgradient'

type props = {
    className?: String
    title: string 
    children?: ReactNode
    isBgradient?: boolean
    classText?: string
}

export default function Badges({className , title, children, isBgradient, classText} : props ) {
  return (
    <div className='relative group'>
        { isBgradient ? <Bgradient className={`from-[#4f52c9] to-[#8644c5]`}/> : null } 
        <div className={`${className} px-2 py-2 sm:px-4 sm:flex items-center rounded-full border border-white/10 text-sm text-gray-300 transition-colors`}>
            {children}
            <span className={`group-hover:gap-3 transition-all duration-300 ${classText}`}>{title}</span>         
        </div>
    </div>
  )
}
