type props={
    className?: string
}

export default function Bgradient({className}: props) {
  return (
    <div className={`absolute -inset-0.5 bg-gradient-to-l ${className} rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300`}>
    </div>
  )
}
