import Hero from '../components/Hero/Hero'
import Skill from '../components/Skills/Skills'
import { AboutTemplete } from "../templetes";
import { ContactTemplete } from "../templetes";
import { ProjectsTemplete } from "../templetes";

export default function Home() {
  return (
    <>
      <Hero/>
      <Skill/>
      <ProjectsTemplete/>
      <AboutTemplete/>
      <ContactTemplete/>

    </>
  )
}