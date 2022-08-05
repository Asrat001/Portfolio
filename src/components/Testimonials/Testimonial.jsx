import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      title:"User From Upwork",
      review:
        "A pleasure to work with Asrat on this task. Asrat is kind, efficient and a great communicator.",
    },
    {
      img: profilePic2,
      title:"User From Upwork",
      review:
        "Asrat's work has been excellent and delivered on time  I look forward to working with him again",
      
    },
    {
      img: profilePic3,
      title:"Exceed IT Systems",
      review:
        "in his stay at our company Asrat has been wonderful intern and dedicated  worker ",
    },
    {
      img: profilePic4,
      title:"From Upwork",
      review:
        "you done wonderful Job",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
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
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{color:darkMode? 'white':''}}>{client.title}</span>
                <span style={{color:darkMode? 'white':''}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
