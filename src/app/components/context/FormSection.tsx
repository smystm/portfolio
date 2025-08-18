import { Form, FormInput, FormSubmit, FormTtl, FormContact } from "../custom/form"
import Ttlsec from "../custom/ttlsec"
import Section from "../ui/section"

export default function NextSec() {
  return (
    <Section className="IntroSection w-[1640px] py-16" id="contact">
        <div className="flex flex-col w-full gap-3 space-y-6">
          <Ttlsec ttl="تماس با ما" desc="سوالی دارید؟ پیامی بفرستید تا در اسرع وقت با شما در ارتباط باشیم" classDesc="desc text-center leading-6" />
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="flex items-center justify-center w-full gap-3 p-2 md:p-8 sm:w-4/5 md:w-7/10 lg:w-3/5 xl:w-3/5 2xl:w-2/5 rounded-2xl bg-white/5">
              <div className="flex flex-col w-full gap-2 px-4 py-6 md:px-12 rounded-2xl bg-white/5">
                <FormTtl/>
                <Form>
                  <FormInput id="name" placeHolder="نام و نام خانوادگی">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-focus-within:text-[#6366f1] transition-colors"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </FormInput>
                  <FormInput id="gmail" type="gmail" placeHolder="جمیل شما">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-focus-within:text-[#6366f1] transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </FormInput>
                  <FormInput id="message" textarea={true} placeHolder="پیام شما">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-focus-within:text-[#6366f1] transition-colors"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </FormInput>
                  <FormSubmit/>
                </Form>
                <hr className="my-4 text-white/20" />
                <FormContact />
              </div>
            </div>
          </div>
        </div>
    </Section>
  )
}
