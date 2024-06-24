import React from 'react'
import './Testimonial.css'
// import avt1 from '../../assets/People.png'
// import avt2 from '../../assets/People.png'
// import avt3 from '../../assets/People.png'
// import avt4 from '../../assets/People.png'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>A Bit More About Me</h5>
      <h2>Now & Education</h2>
      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >

          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h4 className='client__name'>Experiences</h4>
              <small className='client__review'>
                <ul> Secured a Global Rank Of <b>5867 in IIT JEE ADVANCED 2021 amongst 1.2 million candidates.</b></ul>
                <ul><b>Open Source Contributor @ Girls Script Summer Of Code 2022</b> (Feb 2022 - May 2022).</ul>
                <ul><b>Mentor and web developer at BFXPRISM</b> taught Python and CSS to students of 6-10 classes at BFX Skillathon Event.</ul>
                <ul><b> WebDeveloper at SAIRC and SPEC at IIT(ISM) Dhanbad.</b></ul>
                <ul><b> Software Developer Externship at Algouniversity(Backed By Y-Combinator)</b></ul>
                <ul><b> Full Stack Developer Intern at NeuroNexus Innovations</b></ul>
                <ul><b> Software Engineering Intern at RadilaxAI</b></ul>
                <ul><b> WebDeveloper at SAIRC and SPEC at IIT(ISM) Dhanbad.</b></ul>
                <ul><b>Member at E-cell and Fitech Club of IIT(ISM) Dhanbad</b></ul>
              </small>
          </SwiperSlide>

          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h4 className='client__name'>Let Me Introduce Myself</h4>
              <small className='client__review'>
                <ul>Full Name : Yash Choudhary</ul>
                <ul>BirthDate : 5th September, 2003 </ul>
                <ul>WEBSITE : https://github.com/yash52003</ul>
                <ul>EMAIL : yashchoudhary52003@gmail.com</ul>
                <ul>PHONE : 9987100604</ul>
              </small>
          </SwiperSlide>
        
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>Currently Pursuing</h5>
              <small className='client__review'>
                <ul>COLLEGE : IIT(ISM) DHANBAD</ul>
                <ul>CURRENT YEAR : Second Year</ul>
                <ul>DEGREE : Bachelor of Technology</ul>
                <ul>BRANCH : Electrical Engineering</ul>
                <ul>CGPA(current) : 8.5</ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>CLASS 12th</h5>
              <small className='client__review'>
                <ul>YEAR : 2021</ul>
                <ul>BOARD : HSC(State Board of Maharashtra)</ul>
                <ul>SCHOOL : PBHS School</ul>
                <ul>FROM : Mumbai, Maharashtra</ul>
                <ul>PERCENTAGE : 96%</ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>CLASS 10TH</h5>
              <small className='client__review'>
                <ul>YEAR : 2019</ul>
                <ul>BOARD : SSC(State Board of Maharashtra)</ul>
                <ul>SCHOOL : PBHS School</ul>
                <ul>FROM : Mumbai, Maharashtra</ul>
                <ul>PERCENTAGE : 93.4%</ul>
              </small>
          </SwiperSlide>
          
      </Swiper>
    </section>
  )
}

export default Testimonial
