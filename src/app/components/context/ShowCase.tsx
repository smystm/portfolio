import Section from "../ui/section"
import Ttlsec from "../custom/ttlsec"
import Techs,{TechTmpl} from "../custom/techs"
import Tabox from "../custom/tabox"
import Tab,{TabLable, TabInput} from "../custom/tab"
import { Project, ProjectTpl } from "../custom/project"
import { CertificatesTpl, Certificates } from "../custom/certificates"

export default function ShowCase() {
  return (
    <Section className="IntroSection w-[1640px] h-screen">
        <div className="w-full flex flex-col space-y-3 gap-3 mb-150">
          <Ttlsec classDesc="desc text-center leading-6" ttl="کارهای تیم ما" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم ">
          </Ttlsec>
          <Tab>
            <ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8 py-3 border border-white/10 bg-white/2 rounded-3xl text-gray-300">
              <li className="">
                <TabInput id="yes" isDefault={true}></TabInput>
                <TabLable txtSpan="مهارت های فنی" id="yes">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 w-5 h-5 transition-all duration-100"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
                </TabLable>
                <Tabox className="w-[70vw]">
                  <TechTmpl>
                    <Techs src="/svgs/html.svg" tech="HTML"></Techs>
                    <Techs src="/svgs/css.svg" tech="CSS"></Techs>
                    <Techs src="/svgs/javascript.svg" tech="JavaScript"></Techs>
                    <Techs src="/svgs/bootstrap.gif" tech="Bootstrap"></Techs>
                    <Techs src="/svgs/tailwind.svg" tech="Tailwind CSS"></Techs>
                    <Techs src="/svgs/ex.png" tech="Express JS"></Techs>
                    <Techs src="/svgs/nodejs.svg" tech="Node JS"></Techs>
                    <Techs src="/svgs/reactjs.svg" tech="React"></Techs>
                    <Techs src="/svgs/nextjs.svg" tech="Next JS"></Techs>
                    <Techs src="/svgs/mongodb.png" tech="MongoDB"></Techs>
                    <Techs src="/svgs/json.png" tech="JWT"></Techs>
                    <Techs src="/svgs/typescript.png" tech="TypeScript"></Techs>               
                  </TechTmpl>
                </Tabox>
              </li>

              <li className="">
                <TabInput id="no"></TabInput>
                <TabLable id="no" txtSpan="گواهی و مدارک">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 w-5 h-5 transition-all duration-100"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                </TabLable>
                <Tabox className="w-[85vw]">
                  <CertificatesTpl>
                    <Certificates name="full-stack-web" />
                    <Certificates name="full-stack-web" />
                    <Certificates name="full-stack-web" />
                  </CertificatesTpl>
                </Tabox>
              </li>

              <li className="">
                <TabInput id="yesno"></TabInput>
                <TabLable id="yesno" txtSpan="نمونه کار ها">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 w-5 h-5 transition-all duration-100"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </TabLable>
                <Tabox className="w-[85vw]">
                  <ProjectTpl>
                    <Project src="/imgs/1.png" title="پروژه 1" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"></Project>
                    <Project src="/imgs/2.png" title="پروژه 2" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"></Project>
                    <Project src="/imgs/3.png" title="پروژه 3" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"></Project>
                  </ProjectTpl>
                </Tabox>
              </li>
            </ul>
          </Tab>
        </div>
    </Section>       
  )
}
