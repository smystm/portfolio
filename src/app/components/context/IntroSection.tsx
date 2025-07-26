import Section from "../ui/section"
import Ttlsec from "../custom/ttlsec"
import BoxView from "../custom/boxView"
import LinkBtn from "../custom/linkBtn"

export default function IntroSection() {
  return (
    <Section className="IntroSection w-[1640px] mt-6 md:mt-16 py-16" id="about">
        <div className="w-full flex flex-col space-y-3 gap-3">
          <Ttlsec 
            ttl="درباره ما"
            desc="همه چی از یه لپ‌تاپ داغون، یه چایی سرد و یه قهوه‌ی تلخ شروع شد! ما چندتا توسعه‌دهنده‌ایم که تصمیم گرفتیم دور هم جمع بشیم و برای کسب‌وکارهای مختلف، سایت درست کنیم. بعضی وقتا از صفر کد می‌زنیم، بعضی وقتا هم با قالب‌های خوب کار رو بالا میاریم؛ مهم اینه که خروجی، تمیز و کاربردی باشه. تازه‌کاریم و چندتا پروژه‌ی ساده هم انجام دادیم، ولی داستانمون همین‌جا تموم نمیشه. قراره کم‌کم بزرگ‌تر بشیم، تجربه‌هامون بیشتر شه و پروژه‌هامون هی جالب‌تر!"
            classDesc="desc text-center leading-10"
            >
          </Ttlsec>
          <div className="w-full sm:w-1/2 flex gap-4 justify-center m-auto">
            <LinkBtn href="#showcase" titleBtn="مشاهده کار ها" classBtn="py-4" classParent="w-[200px] hover:scale-105 hover:shadow-xl duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-4 h-4 sm:w-5 sm:h-5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </LinkBtn>
            <LinkBtn href="consult" titleBtn="مشاوره رایگان" classBtn="bg-gradient-to-l from-[#4f52c9] to-[#8644c5] py-4" classParent="w-[200px] hover:scale-105 hover:shadow-xl duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4 sm:w-5 sm:h-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            </LinkBtn>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between mt-12">
            <BoxView topText="کدهای تمیز و دقیق" subText="سایتت با کدهای مرتب ساخته می‌شه" count={2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8 text-white"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </BoxView>
            <BoxView topText="کیفیت و تضمین" subText="تمرکز روی بهترین تجربه کاربری" count={3}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-white"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            </BoxView>
            <BoxView topText="کیفیت و تضمین" subText="برندت رو فراتر از مرزها می‌بریم" count={4}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-8 h-8 text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </BoxView>
          </div>
        </div>
    </Section>
  )
}
