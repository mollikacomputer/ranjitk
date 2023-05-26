import React from "react";
// import profilePic from '../../Assets/images/profilepic.jpg';
import { TypeAnimation } from 'react-type-animation';
// import Resume from '../../Assets/Resume.pdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from "@/styles/herosection.module.css";
// import {Link} from 'react-router-dom';

const HeroSection = () => {

    const resumeTostify = () =>{
        toast('Resume Download Successfully');
    }

    
  return (
    <div className="" 
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
        className={Styles.portfolioImageEffect}
          src='/ranjit.jpg'
          className={`${Styles.portfolioImageEffect} ${"max-w-sm rounded-lg shadow-2xl" }`}
          alt="Portfolio image"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <div 
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          >
          <h1 className="text-5xl font-bold">Ranjit Kumar Mandal</h1>
          <TypeAnimation
            sequence={
                [
                    'HTML', 1000,
                    'CSS', 1000,
                    'Javascript', 1000,
                    'ReactJs', 1000,
                    'NodeJS', 1000,
                    'MongoDB', 1000,
                    'GoogleFirebase', 1000,
                    'NextJs', 1000,
                    'Static Website', 1000,
                    'Dynamic Website', 1000,
                    'Single Page Application', 1000,
                    'Service Website', 1000,
                ]
            }
                        //  Replacing previous Text
            style={{ fontSize: '2em' }}
            wrapper="h2"
            repeat={Infinity}
        />
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary mr-6">Hire Me</button>
          {/* <button onClick={resumeTostify} className="btn btn-primary"> <Link to={Resume} target="_blank" download>Download Resume</Link> </button> */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;