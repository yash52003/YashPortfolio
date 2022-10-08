import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {SiCodechef} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/anmol-chhabra-41079922a" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/anmolchhabra21" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank"><GrInstagram/></a>
        <a href="https://www.codechef.com/users/anmolchh500" target="_blank"><SiCodechef/></a>
    </div>
  )
}

export default HeaderSocials