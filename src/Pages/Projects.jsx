import React from "react";
import MobileMenu from "../Components/MobileMenu";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Autoplay, Pagination, Navigation } from "swiper";
import { projects } from "../data";

import "swiper/css";
const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}
const Projects = () => {
  return (
    <main className="project_middle about_middle">
      <h2 className="projects_h2">
        My <span className="me">Portfolio</span>
      </h2>

      <div className="project_1">
        {projects.map(
          ({ id,
            image1,
            image2,
            image3,
            description_heading,
            description_para,
            live_site_link,
            live_site,
            github_image,
            github_link }
          ) => {
            return (
              <>
                <div className="swiper" key={id}>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                  >
                    <SwiperSlide className="swiper-slide">
                      <img src={image1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={image2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={image3} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="description ">
                  <div className="desc">
                    <div className="description_heading">
                      {description_heading}
                    </div>
                    <p>{description_para}</p>

                    <div className="referal-link">
                      <a href={live_site_link} target="_">{live_site}</a>
                      <a href={github_link} target="_"><img src={github_image} alt="" /></a>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>

      <MobileMenu />
    </main>
  );
};

export default Projects;
