import React from 'react'
import './Testimonial.css'
import avt1 from '../../assets/People.png'
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
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >

          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div>
              <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eaque rem fugit exercitationem iste dolorum eveniet blanditiis quas, vitae possimus dignissimos eum error nemo earum hic omnis nulla quam placeat!
              </small>
          </SwiperSlide>
        
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div>
              <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eaque rem fugit exercitationem iste dolorum eveniet blanditiis quas, vitae possimus dignissimos eum error nemo earum hic omnis nulla quam placeat!
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div>
              <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eaque rem fugit exercitationem iste dolorum eveniet blanditiis quas, vitae possimus dignissimos eum error nemo earum hic omnis nulla quam placeat!
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div>
              <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eaque rem fugit exercitationem iste dolorum eveniet blanditiis quas, vitae possimus dignissimos eum error nemo earum hic omnis nulla quam placeat!
              </small>
          </SwiperSlide>
          
      </Swiper>
    </section>
  )
}

export default Testimonial