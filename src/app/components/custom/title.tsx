type props={
  topTtl: string,
  subTtl: string
}

export default function Title({topTtl ,subTtl}: props) {
  return (
    <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] dark:text-white'>
        <span className='relative inline-block bg-gradient-to-l from-[#ffffff] to-[#f9f9f9] bg-clip-text text-transparent'> {topTtl} </span>
        <br />
        <span className='relative inline-block bg-gradient-to-l from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mt-2'> {subTtl} </span>
    </h1>
  )
}
