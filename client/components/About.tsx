import React, {useEffect} from 'react'
import {Socials} from './Socials'
import {AboutContent, SkillsContent} from '../types/types'

interface AboutProps {
    about: AboutContent,
    links:{
        title:string,
        url:string,
        icon:{
          alternativeText:string,
          url:string
        }
      }[]
    skills: SkillsContent
}
// About section of the site
export const About: React.FC<AboutProps> = ({about, links, skills}) => {
        return (
            <section className="about" id="about">
                <div>
                    <div className="top-heading">
                        <h2>{about.title}</h2>
                        <Socials links={links} />
                    </div>
                    <div className="about-description" style={{whiteSpace: "pre-wrap"}}>
                        <p>{about.description}</p>
                    </div>
                    <div>
                        <h3>Skills: </h3>
                        {/*Display all the images in the skills
                           Change the color of the skills depending on the type of skill*/}
                        <div className="skills">
                            {skills.map((skill, index) => {
                                if(skill.category === "Language"){
                                    return <p key={index} style={{backgroundColor:"#3d5a80 ", width:"fit-content"}}>{skill.skill}</p>
                                }
                                if (skill.category === "Front-End"){
                                    return <p key={index} style={{backgroundColor:"#219ebc ", width:"fit-content"}}>{skill.skill}</p>
                                }
                                if (skill.category === "Back-End"){
                                    return <p key={index} style={{backgroundColor:"#ee6c4d", width:"fit-content"}}>{skill.skill}</p>
                                }
                                if (skill.category === "Other Tools"){
                                    return <p key={index} style={{backgroundColor:"#293241", width:"fit-content"}}>{skill.skill}</p>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
}

