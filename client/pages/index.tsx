import type { NextPage, GetStaticProps } from 'next'
import {Header} from '../components/Header'
import {Hero} from '../components/Hero'
import {About} from '../components/About'
import { Projects } from '../components/Projects'
import {HomeContent, AboutContent, ProjectsContent, SkillsContent, FooterContent} from '../types/types'
import {Footer} from '../components/Footer'
import Head from 'next/head'


interface HomeProps {
  about:AboutContent,
  home: HomeContent,
  projects: ProjectsContent[],
  skills:SkillsContent
}
// Home page of site
const Home: NextPage<HomeProps> = ({about, home, projects, skills}) => {

  return (
    <>
      <Head>
        <title>Jonathan Aruliah</title>
        <meta name="description" content="Jonathan Aruliah's web portfolio"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href={`https://api.jaruliah.me${home.favicon.url}`} />
      </Head>

      <Header />
      <div className="container">
        <Hero home={home}/>
        <About about={about} links={home.links} skills={skills} />
        <Projects projects={projects}/>
        <Footer footerMessage={home.footermessage} footerImage={home.footerimage}/>
      </div>
    </>
  )
}

export default Home

export const getStaticProps:GetStaticProps = async () => {
  const res = await fetch(`https://api.jaruliah.me/home`)
  const home = await res.json()

  const res2 = await fetch(`https://api.jaruliah.me/about`)
  const about = await res2.json()

  const res3 = await fetch(`https://api.jaruliah.me/skills`)
  const skills = await res3.json()

  const res4 = await fetch(`https://api.jaruliah.me/projects`)
  const projects = await res4.json() 

  return {
      props:{home, about, skills, projects}
  }
}
