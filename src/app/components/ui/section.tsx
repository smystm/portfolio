import { ReactNode } from 'react'

type props={
    className?: string,
    children: ReactNode
}

export default function Section({className, children}: props) {
  return (
    <section className={`w-full ${className} mx-auto min-h-screen flex flex-col md:flex-row-reverse items-center justify-center
       md:justify-between gap-4 px-[5%] sm:px-6 lg:px-[5%]`}>
        {children}
    </section>
  )
}
