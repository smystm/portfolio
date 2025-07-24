import Section from "../ui/section"
import Ttlsec from "../custom/ttlsec"
import BoxView from "../custom/boxView"
import LinkBtn from "../custom/linkBtn"

export default function IntroSection() {
  return (
    <Section className="IntroSection w-[1640px] ">
        <div className="w-full flex flex-col space-y-3 gap-3">
          <Ttlsec 
            ttl="درباره ما"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد"
            classDesc="desc text-center leading-10"
            >
          </Ttlsec>
          <div className="w-full sm:w-1/2 flex gap-4 justify-center m-auto">
            <LinkBtn titleBtn="مشاهده کار ها" classBtn="py-4" classParent="w-[200px] hover:scale-105 hover:shadow-xl duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-4 h-4 sm:w-5 sm:h-5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </LinkBtn>
            <LinkBtn titleBtn="دانلود رزومه" classBtn="bg-gradient-to-l from-[#4f52c9] to-[#8644c5] py-4" classParent="w-[200px] hover:scale-105 hover:shadow-xl duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4 sm:w-5 sm:h-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            </LinkBtn>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between mt-12">
            <BoxView topText="لورم ایپسوم" subText="لورم ایپسوم متن ساختگی" count={2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8 text-white"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </BoxView>
            <BoxView topText="لورم ایپسوم" subText="لورم ایپسوم متن ساختگی" count={3}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-white"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            </BoxView>
            <BoxView topText="لورم ایپسوم" subText="لورم ایپسوم متن ساختگی" count={4}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-8 h-8 text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </BoxView>
          </div>
        </div>
    </Section>
  )
}
