import { ReactNode } from 'react'

type props={
    className?: string,
    children: ReactNode
    id?:string
}

export default function Section({className, children, id}: props) {
  return (
    <section className="overflow-hidden py-32" id={id}>   
      <div className="relative z-10 opacity-100 transition-all duration-1000 opacity-100">
        <div className={`w-full ${className} mx-auto flex flex-col md:flex-row-reverse items-center justify-center
          md:justify-between gap-4 px-[5%] sm:px-6 lg:px-[5%]`}>
          {children}
        </div>
      </div>
    </section>
  )
}
