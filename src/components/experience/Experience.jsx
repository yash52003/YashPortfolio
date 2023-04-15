import React from 'react'
import './Experience.css'
import {SiFirebase, SiHtml5, SiMusicbrainz, SiPhp} from 'react-icons/si'
import {FaCss3, FaLaravel} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {FaNode} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiPostman} from 'react-icons/si'
import {DiGit} from 'react-icons/di'
import {GrMysql} from 'react-icons/gr'
// import {SiMui} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiHtml5 className='experience__details__icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <FaCss3 className='experience__details__icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details__icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <SiBootstrap className='experience__details__icons'/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details__icons'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <SiMusicbrainz className='experience__details__icons'/>
              <div>
                <h4>Material UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            {/* <article className='experience__details'>
              <SiHtml5/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article> */}

          </div>
        </div>

        {/* Backend starts */}

        <div className="experience__backend">

        <h3>BackEnd Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <FaNode className='experience__details__icons'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details__icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <SiFirebase className='experience__details__icons'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details__icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <SiPhp className='experience__details__icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <FaLaravel className='experience__details__icons'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            {/* <article className='experience__details'>
              <SiHtml5/>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <SiHtml5/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article> */}

            {/* <article className='experience__details'>
              <GrMysql  className='experience__details__icons'/>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article> */}

          </div>

        <div className="experience__backend">

        <h3>Others</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiPostman className='experience__details__icons'/>
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <DiGit className='experience__details__icons'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

          </div>

        </div>

      </div>
      </div>
    </section>
  )
}

export default Experience