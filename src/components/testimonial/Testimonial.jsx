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
      <h2>Education</h2>
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
              <h5 className='client__name'>Let Me Introduce Myself</h5>
              <small className='client__review'>
                <ul>Full Name : Anmol Chhabra</ul>
                <ul>BirthDate : November 21, 2002 </ul>
                <ul>WEBSITE : anmolchhabra.herokuapp.com</ul>
                <ul>EMAIL : anmolchhabra71500@gmail.com</ul>
                <ul>PHONE : 9468871500</ul>
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
                <ul>CGPA(current) : 8.63</ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>CLASS 12th</h5>
              <small className='client__review'>
                <ul>YEAR : 2020</ul>
                <ul>BOARD : CBSE</ul>
                <ul>SCHOOL : SRM International School</ul>
                <ul>FROM : Hanumangarh Town, Rajasthan</ul>
                <ul>PERCENTAGE : 95.2%</ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>CLASS 10TH</h5>
              <small className='client__review'>
                <ul>YEAR : 2018</ul>
                <ul>BOARD : CBSE</ul>
                <ul>SCHOOL : SRM International School</ul>
                <ul>FROM : Hanumangarh Town, Rajasthan</ul>
                <ul>PERCENTAGE : 90.2%</ul>
              </small>
          </SwiperSlide>
          
      </Swiper>
    </section>
  )
}

export default Testimonial