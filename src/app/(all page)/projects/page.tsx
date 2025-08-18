import Section from "@/app/components/ui/section"
import {Project,ProjectTpl} from "../../components/custom/project"
import React from 'react'

export default function Projects() {
  return (
    <div className="projects">
      <Section className="IntroSection w-[1640px] py-32 md:py-24" id="showcase">
        <ProjectTpl>
          <Project src="/imgs/1.png" title="پروژه 1" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"></Project>
          <Project src="/imgs/2.png" title="پروژه 2" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"></Project>
          <Project src="/imgs/3.png" title="پروژه 3" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"></Project>
        </ProjectTpl> 
      </Section>
    </div>
  )
}
