import React from 'react'
import './Footer.css'
import {FaFacebookSquare, FaGithub, FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {ImTwitter} from 'react-icons/im'

const footer = () => {
  return (
    <footer>
      <h1><a href="#" className='footer__logo'>YASH CHOUDHARY</a></h1>
      

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/yash-choudhary-020a79252/"><FaLinkedin className='footer__logo'/></a>
        <a href="https://www.instagram.com/yash__iitian/"><GrInstagram className='footer__logo'/></a>
        <a href="https://github.com/yash52003"><FaGithub className='footer__logo'/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Yash Choudhary.All Rights Reserved.
          <br />
          The Website is still in development and progress is being made in the backend. This Website has Been Made Responsive.
        </small>
      </div>
    </footer>
  )
}

export default footer