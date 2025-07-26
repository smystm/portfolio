import { ReactNode } from 'react'

type props={
    className?: string,
    children: ReactNode
    id?:string
}

export default function Section({className, children, id}: props) {
  return (
    <section className="overflow-hidden" id={id}>   
      <div className="relative z-10 opacity-100 transition-all duration-1000 opacity-100">
        <div className={`w-full ${className} mx-auto flex flex-col items-center justify-center
          md:justify-between gap-4 px-[5%] sm:px-6 lg:px-[5%]`}>
          {children}
        </div>
      </div>
    </section>
  )
}
