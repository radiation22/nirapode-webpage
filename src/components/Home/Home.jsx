import React from "react";
import Banner from "../Banner/Banner";
import ImageSlider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import "./home.css";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import Video from "../Video/Video";
import Messenger from "../Messenger/Messenger";

import Donation from "../Donation/Donation";
import VideoSlide from "../Video/VideoSlide";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#05A541] banner">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

      <VideoSlide></VideoSlide>

      <div className="">
        <div>
          <Card></Card>
        </div>
        <ImageSlider></ImageSlider>
      </div>
      <div className="bg-[#05A541] contact pt-[250px] mt-[-200px]">
        <Donation></Donation>
        <Contact></Contact>
        <Messenger></Messenger>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
