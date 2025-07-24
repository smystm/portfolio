import LinkBtn from "./linkBtn"
import Button from "../ui/buttons"

type certificatesTpl = {
    children: React.ReactNode
}

function CertificatesTpl({children}: certificatesTpl) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
    </div>
  )
}

type props = {
    name: string,
}

function Certificates({name}: props) {
  return (
    <div className="group realative w-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg rounded-xl">
        <div className="realative rounded-2xl overflow-hidden flex p-4 justify-center items-center hover:shadow-purple-500/20 transition-all duration-600">
            <div className="flex flex-col z-10">
                <div className="rounded-sm realtive overflow-hidden group-hover:border-white/20 transition-transform duration-600">
                    <img src={`/imgs/${name}.png`} className="transform group-hover:scale-105 transition-transform duration-600" alt="SEO" />
                </div>
                <div className="mt-4 z-10">
                    <Button name="دانلود" className="relative w-full py-2.5 backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-3 text-sm text-gray-200 font-medium overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-800/55 backdrop-blur-lg bg-white/5 hover:bg-white/10 text-white/90 active:scale-95 focus:outline-none hover:cursor-pointer transition-all duration-300 " choose="none" send="none"/>
                </div>
            </div>
        </div>
    </div>
  )
}


export {Certificates,CertificatesTpl}

