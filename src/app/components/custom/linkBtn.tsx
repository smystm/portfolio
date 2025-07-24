import Link from "next/link";
import { ReactNode } from "react";

type props = {
    classParent?: string,
    classBtn?: string,
    titleBtn: string,
    isgradient?: boolean,
    children?: ReactNode,
    href?: string
}

export default function LinkBtn({classParent, classBtn, titleBtn, isgradient, children, href}: props) {
  return (
    
    <Link href={href ?? "#"} className={`${classParent} relative group w-[160px]`}>
      { isgradient? <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div> : null }
      <div className={`relative py-2.5 bg-[#111827] backdrop-blur-xl ${classBtn} rounded-lg border border-white/10 flex items-center justify-center gap-3 text-sm text-gray-200 font-medium overflow-hidden transition-all duration-300`}>
        <span className="group-hover:gap-3 transition-all duration-300">{titleBtn}</span>
        {children}
      </div>     
    </Link>
  )
}
