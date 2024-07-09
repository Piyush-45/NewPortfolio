import React from "react";
import MobileMenu from "../Components/MobileMenu";
import "./AppProject.css"
import aora1 from "../images/Onboarding1.png"
import aora2 from "../images/aora2.png"
import aora3 from "../images/aora3.png"
import aora4 from "../images/aora4.png"

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Autoplay, Pagination, Navigation } from "swiper";
import recipeVideo from "../recipeapp.mp4"
import newsapp from "../newsapp.mp4"
import  datingapp from "../datingapp.mp4"
import github_image from "../images/githubf.png"
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
const AppProject = () => {
  return (
    <main className="project_middle about_middle">
      <h2 className="projects_h2">
        My <span className="me">Portfolio</span>
      </h2>
      <div className="project_1">

      <div className="appProjectContainer" >
          <div className="width">
            <video width={'100%'} height="360" controls autoPlay >
              <source src={datingapp} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="description_heading">
            Zoowaj:Elevate your dating experience.
          </div>
        </div>
        <p className="appDescriptionp">
        Discover <strong>Zoowaj</strong>, my latest freelance project built with React Native and Expo. Effortlessly navigate through matches with a sleek UI and real-time messaging. Powered by <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Supabase</span> and secured with <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Kinde authentication</span>, Zoowaj ensures a safe and smooth experience. This app is a testament to my React Native expertise, offering a sophisticated and personalized matchmaking journey. 💖📱✨
        </p>

        <div className="referal-link">
          <p style={{ fontSize: '1.3rem', backgroundColor: '#333', padding: '1rem', fontWeight: '300' }}>Source Code : </p>
          <a href="https://github.com/Piyush-45/Recipe-App" target="_"><img src={github_image} alt="" /></a>
        </div>

        {/*  */}
        <div className="appProjectContainer" >
          <div className="phoneImages">
            <img src={aora1} className="phoneImg" />
            <img src={aora2} className="phoneImg" />
            <img src={aora3} className="phoneImg" />
          </div>
          <div className="description_heading">
            AI Video Hub
          </div>
        </div>
        <p className="appDescriptionp">
          Step into the future of video sharing with AI Video Hub – a dynamic React Native application powered by cutting-edge technologies. Seamlessly integrated with the robust backend of Appwrite, and adorned with captivating Animatable animations, this project promises an immersive user experience like never before. With our expertise in <span style={{ color: "#0b9876", fontWeight: 'bold' }}>React Native, Expo, Nativewind, Animatable, and Appwrite </span>, we ensure unparalleled functionality and design. Ready to elevate your app experience? Let's connect and bring your vision to life!
        </p>

        <div className="referal-link" style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '1.3rem', backgroundColor: '#333', padding: '1rem', fontWeight: '300' }}>Source Code : </p>
          <a href="https://github.com/alter0313/sora" target="_"><img src={github_image} alt="" /></a>
        </div>

        {/*  */}
        <div className="appProjectContainer" >
          <div className="width">
            <video width={'100%'} height="360" controls autoPlay >
              <source src={recipeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="description_heading">
            Culinary Companion: A Feature-Rich React Native Recipe App
          </div>
        </div>
        <p className="appDescriptionp">
          Introducing my latest React Native creation – a Recipe App that elevates your culinary journey. Immerse yourself in seamless navigation with <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Stack and Drawer Navigation</span>. From dynamic animations to a Masonry List layout, the app ensures a visually delightful experience. <br />
          Unlock culinary exploration with categories, advanced search, and Masonry List. <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Firebase authentication </span>adds a personalized touch, allowing users to save and savor recipes.
        </p>

        <div className="referal-link">
          <p style={{ fontSize: '1.3rem', backgroundColor: '#333', padding: '1rem', fontWeight: '300' }}>Source Code : </p>
          <a href="https://github.com/Piyush-45/Recipe-App" target="_"><img src={github_image} alt="" /></a>
        </div>


        <div className="appProjectContainer">
          <video width={'100%'} height="360" controls>
            <source src={newsapp} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="description_heading">

            Explore FlahsFeed: Your Modern News Hub in React Native
          </div>
          <p className="appDescriptionp">Unveil a seamless news exploration with <strong> FlashFeed</strong>, my latest React Native project. Navigate effortlessly through the latest stories using intuitive tabs and a fluid FlatList integration. <span style={{ color: "#0b9876", fontWeight: 'bold' }}> The app's responsive design </span>adapts seamlessly across devices for an optimal viewing experience. <br />
            What sets InfoPulse apart is its secure <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Firebase authentication,</span>  ensuring user trust. Save and savor your favorite news stories, adding a personal touch to your news feed. This app is more than a news app; it's a testament to my <span style={{ color: "#0b9876", fontWeight: 'bold' }}>React Native expertise</span> , offering a captivating and personalized news experience. 🌐📲📰</p>
        </div>
        <div className="referal-link">
          <p style={{ fontSize: '1.3rem', backgroundColor: '#333', padding: '1rem', fontWeight: '300' }}>Source Code : </p>
          <a href="https://github.com/Piyush-45/NewsApp" target="_"><img src={github_image} alt="" /></a>
        </div>
      </div>

      <MobileMenu />
    </main>
  );
};

export default AppProject;



