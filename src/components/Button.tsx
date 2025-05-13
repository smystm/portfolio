import { ReactNode } from "react";

type props = {
    className?: string,
    titleBtn: string,
    children: ReactNode
}

export default function Button({className, titleBtn, children}: props) {
  return (
    <a href="#" className={`${className} relative group w-[160px]`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700">
      </div>
      <div className="relative py-2.5 bg-[#111827] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-3 text-sm text-gray-200 font-medium overflow-hidden transition-all duration-300">
        <span className="group-hover:gap-3 transition-all duration-300">{titleBtn}</span>
        {children}
      </div>     
    </a>
  )
}
