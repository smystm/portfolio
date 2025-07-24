import { ReactNode } from "react"

type propstbs={
  children: ReactNode,   
}

export default function Tab({children}: propstbs) {
  return (
    <div className='flex items-center justify-center mt-4'>
      {children}
    </div>
  )
}


type propsLbl={
    id:string,
    txtSpan:string,
    children: ReactNode,   
}

function TabLable({id, txtSpan, children}: propsLbl) {
  return (
    <label className="flex justify-center cursor-pointer rounded-2xl flex-col text-center items-center py-6.5 px-4 focus:outline-none peer-checked:border-transparent peer-checked:bg-[#2c40ff26] peer-checked:text-[#a78bfa] transition-all duration-300 ease-in-out" htmlFor={id}>
        {children}
        <span className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-200">{txtSpan}</span> 
    </label>
  )
}

type propIn={
  id: string,
  isDefault?:boolean
}

function TabInput({id, isDefault}: propIn)  {
  return (
    <>
      { isDefault? 
      <input className="peer sr-only" type="radio" value={id} name="answer" id={id} defaultChecked />
        :
      <input className="peer sr-only" type="radio" value={id} name="answer" id={id} /> 
      }
    </>
  )
}

export {TabLable, TabInput}