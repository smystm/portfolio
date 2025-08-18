import { ReactNode } from "react"
type props={
    children:ReactNode,
    className:string
}


export default function Tabox({children, className}: props) {
  return (
    <div className={`${className} absolute left-[50%] translate-x-[-50%] p-6 mt-8 rounded-lg transition-all duration-300 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible`}>
        {children}
    </div>
  )
}
