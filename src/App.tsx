
import './App.css'
import { AnimatedNavFramer } from '@/Pages/navigation-menu'
import {SplineSceneBasic} from '@/Pages/HeroSection'
import SkillsPage from './Pages/SkillSection'
import ProjectCardSection from './Pages/ProjectSection'
import WorkExperienceSection from './Pages/ExprienceSection'
import TiltCardSection from './Pages/EducationSection'
import ContactSection from './Pages/ContactSection'
function App() {

  return (
    <>
      <AnimatedNavFramer  />
       <SplineSceneBasic/>
      <SkillsPage/>
      <ProjectCardSection/>
      <WorkExperienceSection/>
      <TiltCardSection/>
      <ContactSection/>
       
    </>
  )
}

export default App
