import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./card.css";
import { Navigation } from "swiper/modules";
// import "./styles.css";
import "swiper/css/navigation";
// import required modules
import { FaMobileAlt } from "react-icons/fa";
import icon1 from "../../assets/bus.png";
import icon2 from "../../assets/queue.png";
import icon3 from "../../assets/convenient.png";
import icon4 from "../../assets/gift.png";
import icon5 from "../../assets/lottery.png";
import thumbnail1 from "../../assets/journey.jpg";
import thumbnail3 from "../../assets/brown.png";
import thumbnail2 from "../../assets/group-bus-travel-myths-debunked.jpg";
import thumbnail4 from "../../assets/buschena.png";
import playBtn from "../../assets/play (2).png";

export default function CardSlide() {
  const [hovered, setHovered] = useState(false);
  const [showVideos, setShowVideos] = useState(Array(14).fill(false));

  const handlePlayClick = (index) => {
    const updatedVideos = [...showVideos];
    updatedVideos[index] = true;
    setShowVideos(updatedVideos);
  };

  const handleCloseVideo = () => {
    setShowVideos(Array(14).fill(false));
  };
  return (
    <>
      <Swiper
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide className="py-10">
          <div
            className={`video-container border-[#04A83F] drop-shadow-xl border-b-8  `}
          >
            <div>
              {showVideos[0] ? ( // Use showVideos[0] to check the visibility of the first video
                // Show the video player when 'showVideos[0]' is true
                <div>
                  <iframe
                    height="170"
                    className="w-full"
                    src="https://www.youtube.com/embed/A86i7Lf0PJk?si=7O9k4IokDuNHO-Oh"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    onClick={handleCloseVideo}
                  >
                    X
                  </button>
                </div>
              ) : (
                // Show video thumbnail and play button by default
                <div>
                  <div className="bg-white">
                    <img className="h-[170px] w-full" src={thumbnail1} alt="" />
                  </div>
                  <img
                    className="play-button absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#04A83F] text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayClick(0)} // Pass the index to the click handler
                    src={playBtn}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="bg-white pt-10 pb-5 px-3">
              <h1 className="text-xl  text-[#04A83F]">
                কিভাবে অ্যাপ থেকে টিকিট কাটবেন ?
              </h1>
              <p className="py-4 text-gray-500">
                ভিডিও টি দেখুন এবং আপনার অ্যাপ এ চেষ্টা করুন
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div
            className={`video-container border-[#04A83F] drop-shadow-xl

              border-b-8  `}
          >
            <div>
              {showVideos[1] ? (
                // Show the video player when 'showVideo' is true
                <div>
                  <iframe
                    height="170"
                    className="w-full"
                    src="https://www.youtube.com/embed/OzG0UdfHjl0?si=5q0OPRRi8try2CGB"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    onClick={handleCloseVideo}
                  >
                    X
                  </button>
                </div>
              ) : (
                // Show video thumbnail and play button by default
                <div>
                  <div className="bg-white">
                    <img className="h-[170px] w-full" src={thumbnail2} alt="" />
                  </div>
                  <img
                    className="play-button absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#04A83F] text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayClick(1)}
                    src={playBtn}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="bg-white pt-10 pb-5 px-3">
              <h1 className="text-xl  text-[#04A83F]">
                কিভাবে গিফট/রিওয়ার্ড সংগ্রহ করবেন ?
              </h1>
              <p className="py-4 text-gray-500">
                ভিডিও টি দেখুন এবং আপনার অ্যাপ এ চেষ্টা করুন
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div
            className={`video-container border-[#04A83F] drop-shadow-xl

              border-b-8  `}
          >
            <div>
              {showVideos[2] ? (
                // Show the video player when 'showVideo' is true
                <div>
                  <iframe
                    height="170"
                    className="w-full"
                    src="https://www.youtube.com/embed/dVeaWHGHpY8?si=ZrcZ-dZJeCexCqvp"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    onClick={handleCloseVideo}
                  >
                    X
                  </button>
                </div>
              ) : (
                // Show video thumbnail and play button by default
                <div>
                  <div className="bg-white">
                    <img className="h-[170px] w-full" src={thumbnail3} alt="" />
                  </div>
                  <img
                    className="play-button absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#04A83F] text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayClick(2)}
                    src={playBtn}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="bg-white pt-10 pb-5 px-3">
              <h1 className="text-xl  text-[#04A83F]">
                সুপারভাইজর যেভাবে টিকিট চেক করবে?
              </h1>
              <p className="py-4 text-gray-500">
                ভিডিও টি দেখুন এবং আপনার অ্যাপ এ চেষ্টা করুন
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div
            className={`video-container border-[#04A83F] drop-shadow-xl

              border-b-8 `}
          >
            <div>
              {showVideos[3] ? (
                // Show the video player when 'showVideo' is true
                <div>
                  <iframe
                    className="w-full"
                    height="170"
                    src="https://www.youtube.com/embed/Ylmw5bR11Z4?si=LQ_Q2mrznKfLy-dP"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    onClick={handleCloseVideo}
                  >
                    X
                  </button>
                </div>
              ) : (
                // Show video thumbnail and play button by default
                <div>
                  <div className="bg-white">
                    <img className="h-[170px] w-full" src={thumbnail4} alt="" />
                  </div>

                  <img
                    className="play-button absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#04A83F] text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayClick(3)}
                    src={playBtn}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="bg-white pt-10 pb-5 px-3">
              <h1 className="text-xl  text-[#04A83F]">
                কিভাবে নিরাপদের বাস চিনতে পারব ?
              </h1>
              <p className="py-4 text-gray-500">
                ভিডিও টি দেখুন এবং আপনার অ্যাপ এ চেষ্টা করুন
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-10">
          <div
            className={`video-container border-[#04A83F] drop-shadow-xl

              border-b-8  `}
          >
            <div>
              {showVideos[4] ? (
                // Show the video player when 'showVideo' is true
                <div>
                  <iframe
                    height="170"
                    className="w-full"
                    src="https://www.youtube.com/embed/OzG0UdfHjl0?si=5q0OPRRi8try2CGB"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    onClick={handleCloseVideo}
                  >
                    X
                  </button>
                </div>
              ) : (
                // Show video thumbnail and play button by default
                <div>
                  <div className="bg-white">
                    <img className="h-[170px] w-full" src={thumbnail2} alt="" />
                  </div>
                  <img
                    className="play-button absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#04A83F] text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayClick(4)}
                    src={playBtn}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="bg-white pt-10 pb-5 px-3">
              <h1 className="text-xl  text-[#04A83F]">
                কিভাবে গিফট/রিওয়ার্ড সংগ্রহ করবেন ?
              </h1>
              <p className="py-4 text-gray-500">
                ভিডিও টি দেখুন এবং আপনার অ্যাপ এ চেষ্টা করুন
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
