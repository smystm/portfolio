import { ReactNode } from "react"
import Bgradient from "../ui/bgradient"
import Button from "../ui/buttons"
import Link from "next/link"

type propsTpl = {
    children: ReactNode
}

function ProjectTpl({children}: propsTpl) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
    </div>
  )
}
type props = {
    title: string,
    src:string,
    desc:string
}

function Project({title,src,desc}: props) {
  return (
    <div className="group realative w-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg rounded-2xl">
        <Bgradient className="absolute from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 group-hover:opacity-70 blur rounded-2xl"></Bgradient>
        <div className="realative rounded-2xl overflow-hidden flex p-6 justify-center items-center hover:shadow-purple-500/20 border border-white/5 group-hover:border-purple-500/40 transition-all duration-600">
            <div className="flex flex-col z-10">
                <div className="rounded-xl realtive overflow-hidden group-hover:border-white/20 transition-transform duration-600">
                    <img src={src} className="transform group-hover:scale-105 transition-transform duration-600" alt="SEO" />
                </div>
                <div className="realative mt-8 px-1">
                    <div className="flex flex-col">
                        <h4 className="font-bold text-sm md:text-base tracking-wide text-slate-300 group-hover:text-white transition-colors duration-600 py-2">{title}</h4>
                        <p className="text-xs md:text-sm mt-1 text-gray-400 py-2">{desc}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-4 py-2 text-xs md:text-sm">
                        <Button name="جزییات" className="inline-flex gap-1.5 items-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 hover:cursor-pointer" choose="none" send="none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Button>
                        <Link href="" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex gap-1.5 cursor-pointer">
                            <span>دمو</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-[-90deg]"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export {ProjectTpl, Project}