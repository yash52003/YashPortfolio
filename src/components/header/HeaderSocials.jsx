import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {SiCodechef, SiCodeforces} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yash-choudhary-020a79252/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/yash52003" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/yash__iitian/" target="_blank"><GrInstagram/></a>
        <a href="https://codeforces.com/profile/yashchoudhary52003" target="_blank"><SiCodeforces/></a>
    </div>
  )
}

export default HeaderSocials