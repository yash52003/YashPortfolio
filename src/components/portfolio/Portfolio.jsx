import React from 'react'
import './Portfolio.css'
import IM1 from '../../assets/unnamed.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        
        

      </div>
    </section>
  )
}

export default Portfolio