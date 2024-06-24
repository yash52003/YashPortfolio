import React from "react";
import "./Portfolio.css";
import Edtech from "../../assets/Edtech.png";
import IsmCon from "../../assets/IsmCon.png";
import OnlineJudge from "../../assets/OnlineJudge.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Edtech} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Full Stack Edtech Platfrom</h3>
            <h5>
            A fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.Implemented robust OTP functionality for secure email verification, ensuring user authenticity and data integrity.Integrated Razorpay for streamlined payment processing, enabling hassle-free course enrollment and transactions.Utilized Cloudinary for efficient remote file upload and management, enhancing storage capabilities and media handling.
            </h5>
            <br></br>
            <a
              href="https://github.com/yash52003/EdtechPlatform"
              className="btn btn-primary"
              target="_blank"
            >
              Github and Hosted Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={OnlineJudge} alt="Image" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Full Stack Online Judge and Compiler Project (MERN + Devops)</h3>
            <h5>
            An online judge platform hosting coding problems and challenges. Users solve a series of coding problems. First he has to begin with registration for his account, user can register as admin or user(member). During problem solving, they submit their solutions through the platform. Once submitted, these solutions are evaluated against hidden test cases by the platform. Based on the results of these tests, user solution submission is assigned verdict. The platform provides the infrastructure to manage and execute the DSA coding problems, ensuring fair and impartial evaluation. <b>Skills Used: MongoDB,
              ExpressJS, ReactJS, NodeJS, Mongoose , Docker , AWS , System Design</b>
            </h5>
            <br></br>
            <a
              href="https://github.com/yash52003/OnlineJudgee"
              className="btn btn-primary"
              target="_blank"
            >
              Github and Hosted Link
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IsmCon} alt="Image" />
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
          </div>
        </article>

      </div>
    </section>
  );
};

export default Portfolio;
