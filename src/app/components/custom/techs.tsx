import Bgradient from "../ui/bgradient"
import { ReactNode } from "react"

type props={
    src: string,
    tech: string,
    className?: string,
}

export default function Techs({src, tech, className}: props ) {
  return (
    <>
        <div className={`${className} group flex flex-col items-center gap-2 lg:gap-6 py-8 hover:scale-105 trasation-all duration-300 cursor-pointer rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 shadow-lg hover:shadow-xl ease-in-out`}>
        <div className="tchImg relative">
            <Bgradient className={`from-[#4f52c9] to-[#8644c5] rounded-full opacity-0 blur`}></Bgradient>
            <img src={src} className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" alt="SEO" />
        </div>
        <div className="text-slate-300 font-bold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">{tech}</div>
        </div>
    </>
  )
}

type propsTmpl={
    children: ReactNode
}

export function TechTmpl({children}: propsTmpl) {
  return (
    <div dir="ltr" className="tchbox grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 lg:gap-8 gap-5 grid-row-reverse">
      {children}
    </div>
  )
}

