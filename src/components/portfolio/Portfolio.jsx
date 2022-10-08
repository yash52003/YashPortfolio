import React from 'react'
import './Portfolio.css'
import IM1 from '../../assets/unnamed.png'
import DJrnl from '../../assets/DailyJournal.png'
import Mapp from '../../assets/Map.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Mapp} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Find Nearby Website</h3>
            <a href="https://github.com/anmolchhabra21/Find_NearBy" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DJrnl} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Daily Journal Website</h3>
            <a href="https://github.com/anmolchhabra21/Blog_Journal" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Advanced Blog Website</h3>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>In Progress...</h3>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        

      </div>
    </section>
  )
}

export default Portfolio