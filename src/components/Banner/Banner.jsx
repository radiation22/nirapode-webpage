import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import mbl from "../../assets/Asset 2.png";
import "./banner.css";
import play from "../../assets/play.png";
import CountDown from "../CountDown/CountDown";
const Banner = () => {
  return (
    <div id="home" className="p-10 banner">
      <div className="flex items-center justify-around ps-3 text-white md:ps-10 pb-20">
        <div className=" md:w-[70%]">
          <h1 className="text-xl lg:text-5xl text-[#FFEC00]">
            রুটে বাস শুরুর আর মাত্রঃ
          </h1>
          <CountDown></CountDown>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex gap-5 pt-10">
                <div className=" justify-center flex items-center  rounded-md">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.nirapode1.nirapode1&pcampaignid=web_share&pli=1"
                  >
                    {" "}
                    <img className="h-14" src={play} alt="" />
                  </a>
                </div>
              </div>
              <h1 className="text-xl lg:text-3xl text-[#FFEC00]">
                ডাউনলোড করুন এখনি !
              </h1>

              <h1 className="text-lg lg:text-5xl mt-6">
                মেট্রো/সিটি বাস যাতায়াত সহজ হোক
              </h1>
              <h1 className="text-xl lg:text-4xl text-[#FFEC00]">
                সাধারণ পরিবহনে ডিজিটাল পরিসেবা !
              </h1>
              <h1 className="text-xl lg:text-4xl text-[#FFEC00]">
                নিরাপদ, আরামদায়ক, নিশ্চিন্ত মেট্রো যাতায়াত !
              </h1>
            </div>
            <div className="md:hidden">
              <img className="h-[200px] w-[150px]" src={mbl} alt="" />
            </div>
          </div>
          <p className="text-sm mt-3 md:text-lg md:pr-20">
            এই ডিজিটাল পরিসেবার মাধ্যমে সাধারণ পরিবহন/লোকাল বাস/ সিটিবাস "রাইড
            শেয়ারিং বা ট্রান্সপোর্ট অটোমেশন" এর যুগে প্রবেশ করল। যা বাংলাদেশে এই
            প্রথম। এতে ডিজিটাল সেবায় বাংলাদের আরো একধাপ এগিয়ে গেলো।
          </p>
          <p className="text-sm mt-3 md:text-lg md:pr-20">
            জনসাধারণের প্রতিদিনের লোকাল বাস যাতায়াতকে ভোগান্তিমুক্ত ও উন্নত
            করতে এই প্রচ্ছেষ্টা ছিলো অনেক দুষ্কর। সর্বপরি, এটি সম্ভব হওয়ায়
            জণসাধরণ উপকৃত হওয়ার পাশাপাশি জীবনযাত্রার মান উন্নত করতে পারবে বলে
            আশা করা যায়।
          </p>
        </div>
        <div className="w-[30%] hidden lg:block">
          <img className=" h-[] w-[300px]" src={mbl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
