import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Maya from "../../img/maya.jpg";
import Ecommerce from "../../img/ecommerce.png";

import GC from "../../img/GC.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const portfolio=[
    { img: Maya,
    
      review:
      "In In This Project I have Design , Develop and Deploy Gust Management System For  Maya Film Production",
       link: "#",
    },
    { img: Ecommerce,
      review:
      "this Project is E-Commerce Website Using React and tailwind css",
    
    link:"#",
    },
    { img: GC,
      review:
      "I Design and Develop this  MERN Project for Graduation Class of  Computer engineering to share there Bucket List   ",
    link: "https://stellular-medovik-8b0071.netlify.app/",
    
    }
   
  ]
  return (
<div className="t-wrapperP" id="portfolio">
      <div className="t-headingP">
        <span>My Projects </span>
        <span>Portfolio</span>
      
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {portfolio.map((portfolio, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonialP">
                <img src={portfolio.img} alt="" />
                <span style={{color:darkMode? 'whitesmoke':""}}>{portfolio.review}</span>
              <a href={portfolio.link} target="_blank" rel="noreferrer"> <button className="button n-button">view Project</button></a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
