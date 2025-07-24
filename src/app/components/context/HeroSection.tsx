import Section from '../ui/section'
import TypewriterText from '../../lib/TypewriterText'
import {RocketProg} from '../../lib/LottieWrapper'
import Badges from '../custom/badges'
import Title from '../custom/title'
import LinkBtn from '../custom/linkBtn'
import IconBtn from '../custom/iconBtn'


export default function  HeroSection() {
  return (
    <>
      <Section className="HeroSection max-w-[1440px]">
        <div className='w-full lg:w-1/2 flex flex-col space-y-3 sm:space-y-6 text-right md:text-right order-1'>
          <div className='flex flex-wrap gap-2'>
            <Badges className={`flex gap-2 bg-black/40 backdrop-blur-xl sm:py-2.5`} classText='bg-gradient-to-l from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text text-[.5rem] sm:text-[.9rem] font-medium' title='همین الان سفارش بده' isBgradient={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block lucide lucide-sparkles sm:w-4 sm:h-4 w-2 h-2 text-blue-400"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
            </Badges>
          </div>      
          <div className='space-y-1'>
            <Title topTtl={'توسعه دهنده'} subTtl={'فرانت اند'}></Title>             
          </div>
          <div className='text-right text-sm sm:text-md md:text-lg lg:text-xl text-[#111827] dark:text-gray-300'>
            <TypewriterText 
                className={'transparent'}
                words={['طراحی سایت شما با نوشتن کد از صفر تا صد', 'طراحی سایت سفارشی شما با استفاده از وردپرس و المنتور']}
                loop={0}
                cursorStyle={"|"}
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={1200}
            />
          </div>
          <p className='text-sm md:text-md lg:text-lg text-[#111827] dark:text-gray-300'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است 
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است                
          </p>
          <div className='flex gap-3 flex-wrap justifty-start'>
            <Badges className={`english-font hidden bg-white/5 backdrop-blur-sm hover:bg-white/10`} title='Node.Js'></Badges>
            <Badges className={`english-font hidden bg-white/5 backdrop-blur-sm hover:bg-white/10`} title='Tailwind'></Badges>  
            <Badges className={`english-font hidden bg-white/5 backdrop-blur-sm hover:bg-white/10`} title='TypeScript'></Badges>                
            <Badges className={`english-font hidden bg-white/5 backdrop-blur-sm hover:bg-white/10`} title='Next.Js'></Badges>
            <Badges className={`english-font hidden bg-white/5 backdrop-blur-sm hover:bg-white/10`} title='React'></Badges>
          </div>
          <div className='flex flex-row justify-start gap-3'>
              <LinkBtn titleBtn="نمونه کارها" isgradient={true} href="/project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4 group-hover:translate-x-[-.25rem] transition-all duration-300"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              </LinkBtn>
              <LinkBtn titleBtn="سفارش سایت" isgradient={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4 group-hover:translate-x-[-.25rem] transition-all duration-300"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </LinkBtn>
          </div>
          <div className="flex justify-start items-center gap-3">
            <IconBtn linkIcon='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path><path d="M9 18c-4.51 2-5-2-7-2"></path><path d="M9 18c-4.51 2-5-2-7-2"></path><path d="M9 18c-4.51 2-5-2-7-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></path></svg>
            </IconBtn>
            <IconBtn linkIcon='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-5 h-5 text-gray-400 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>            
            </IconBtn>
            <IconBtn linkIcon='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5 text-gray-400 group-hover:text-white transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>            
            </IconBtn>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center md:justify-end '>
          <RocketProg/>
        </div>
      </Section>
    </>
  )
}
