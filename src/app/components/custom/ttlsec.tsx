type props={
    ttl: string,
    desc: string,
    classDesc: string,
}

export default function Ttlsec({ttl, desc, classDesc}: props) {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-6">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-l from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            {ttl}
        </h2>
        <p className={`w-full md:w-3/5 2xl:w-2/5 font-small text-sm md:text-md md:font-Normal lg:text-lg ${classDesc}`}>
            {desc}
        </p>
    </div>  
  )
}
