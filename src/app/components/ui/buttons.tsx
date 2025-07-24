"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type props={
    className: string
    children?: React.ReactNode
    name: string
    choose: string
    send: string
    type?: any   
}

function Clicked(source:string, choose:string){
    const router = useRouter()
    return ()=>{
      switch(choose){
        case 'push':
          router.push(`/${source}`)
          break
        default:
          break
      }       
    }
}

export default function Button({className, send, children, choose, type, name}:props) {
  return (
    <button className={className} type={type?? 'button'} onClick={Clicked(send,choose)}>
        <span>{name}</span>
        {children}
    </button>
  )
}
