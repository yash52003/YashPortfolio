import React from 'react'
import './About.css'
import MePhoto from '../../assets/MePhoto.jpg'
import { FaAward} from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MePhoto} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Open to Work</h5>
              <small>As Intern Now</small>
            </article>

          </div>

          <p>
          I am a Fullstack Developer, who loves to transform ideas into reality using code. I'm pursuing Bachelor of technology in Electrical Engineering at IIT(ISM) DHANBAD but I am bit more intrested in Computer Science, Coding and Playing Piano.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About