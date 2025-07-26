import { ReactNode } from "react"
import Bgradient from "../ui/bgradient"

type props={
    children?: ReactNode,
    count:Number,
    topText:string,
    subText:string
    isBgradient?:boolean,
}

export default function BoxView({children,count,topText,subText,isBgradient=true} : props) {
  return (
    <a className="w-full flex items-center group relative hover:scale-105 hover:shadow-2xl duration-300" href="#">
        { isBgradient ?  <Bgradient className={`from-[#4f52c9] to-[#8644c5] rounded-3xl opacity-30 `}/> : null } 
        <div className="w-full relative rounded-3xl p-4 flex flex-col space-y-4 bg-gray-900/50 backdrop-blur-lg">
            <div className="w-full flex justify-between">
                <div className="svgBox w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-10deg]">
                    {children}
                </div>
                <div className="counter text-3xl px-2 pt-6 font-bold">{ count.toString() }</div>
            </div>
            <div className="w-full flex justify-between px-2">
                <div className="parents flex flex-col gap-1 justify-center">
                    <p className="m-0 text-md md:text-lg text-gray-200">{topText}</p>
                    <p className="m-0 text-xs md:text-sm text-gray-400">{subText}</p>
                </div>
                <div className="svgBox flex items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300 rotate-[-90deg]"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </div>
            </div>
        </div>
    </a>
  )
}
