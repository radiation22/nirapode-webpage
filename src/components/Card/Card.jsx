import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import "./card.css";
import CardSlide from "./CardSlide";
import VideoSlide from "../Video/VideoSlide";
const Card = () => {
  return (
    <div id="features" className="px-2 lg:px-28 mt-28 ">
      <div className="text-center">
        <a
          target="_blank"
          href="https://www.facebook.com/niraapode?mibextid=ZbWKwL"
        >
          <button className="bg-[#9EDD2A] text-white px-6 mt-10 py-2 rounded-full">
            আরো জানুন
          </button>
        </a>
      </div>
      <div className="mt-20">
        <CardSlide></CardSlide>
      </div>
    </div>
  );
};

export default Card;
