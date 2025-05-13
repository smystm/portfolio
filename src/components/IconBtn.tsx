import Bgradient from "./Bgradient"
import { ReactNode } from "react"

type props = {
    children: React.ReactNode
    linkIcon: string
}

export default function IconBtn({children , linkIcon}: props) {
  return (
    <a href={`${linkIcon}`} target="_blank">
        <button className="relative group cursor-pointer p-3">
            <Bgradient className={`from-[#4f52c9] to-[#8644c5] rounded-xl`}></Bgradient>
            <div className="flex justify-center items-center bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 p-2 group-hover:border-white/20 transition-all duration-300">
                {children}
            </div>
        </button>
    </a>
  )
}
