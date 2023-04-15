import React from "react";
import "./Portfolio.css";
import IM1 from "../../assets/unnamed.png";
import DJrnl from "../../assets/DailyJournal.png";
import Mapp from "../../assets/Map.jpg";
import WOut from "../../assets/WorkOut.png";
import Place from "../../assets/PlaceWeb.png";
import Dojo from "../../assets/DoJo.png";
import ism from "../../assets/IsmCon.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Place} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Placement Helping Website</h3>
            <h5>
              A Portal where Students can register with their credentials and apply for the openings for which they are eligible
              and can see the messages sent by the company and companies can also register and 
              publish a job opening and set a branch and CGPA criteria, only that students would be able to apply 
              and company can send messages to all the applied students and can also specifically see all the students who have applied as well 
              as download them in a excel file.
            </h5>
            <br></br>
            <a
              href="https://cdc-portal-5df01.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Hosted Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WOut} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Work-out Website</h3>
            <h5>
              A MERN Stack Application In which we can Create and Delete a
              Workout from the front end using ReactJS and update the MongoDB
              database using the Backend Server. <b>Skills Used: MongoDB,
              ExpressJS, ReactJS, NodeJS, Mongoose</b>
            </h5>
            <br></br>
            <a
              href="https://github.com/anmolchhabra21/WorkoutWebsite"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Dojo} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>MERN CRUD Blogging Website</h3>
            <h5>Basic Create, Read, Update, Delete functionality application and with a minimilistic theme in MERN Stack.</h5>
            <br></br>
            <a
              href="https://github.com/anmolchhabra21/react-crud-blog"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ism} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>IsmConnect</h3>
            <h5>
              A FullStack Website that I developed with College Seniors, which
              has features of Linkedin like connection, posting, profile,
              comment, etc., Learned about Laravel, PHP, MySQL, Its frontend is
              almost done, and backend is developed; the minimal working
              website is launched here
            </h5>
            <br></br>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Hosted Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Mapp} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Find Nearby Website</h3>
            <h5>
              Using geoNear in MongoDB, We filter the users according to
              latitude and longitude and show which is the closest; we just have
              to update it via backend, and it sorts as per the location. Skills
              Used: Mongoose, MongoDB, ExpressJS
            </h5>
            <br></br>
            <a
              href="https://github.com/anmolchhabra21/Find_NearBy"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DJrnl} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Daily Journal Website</h3>
            <h5>My first Full Stack Website😊</h5>
            <br></br>
            <a
              href="https://github.com/anmolchhabra21/Blog_Journal"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IM1} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>In Progress...</h3>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
