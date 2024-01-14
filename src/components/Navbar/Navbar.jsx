import React, { useState } from "react";
import logo from "../../assets/nirapode.png";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import UpCome from "../Upcome/UpCome";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={` ${isMenuOpen ? "open" : ""} `}>
      <UpCome></UpCome>
      <div className="flex items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-16 w-16" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Add your menu items here */}
                <Link
                  className="text-white px-3 py-2 rounded-md  cursor-pointer font-medium"
                  to="home" // Set the target element's name or ID
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  হোম
                </Link>
                <Link
                  className="text-white px-3 py-2  cursor-pointer font-medium"
                  to="features" // Set the target element's name or ID
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  কি থাকছে
                </Link>
                <Link
                  className="text-white px-3 py-2 cursor-pointer   font-medium"
                  to="exhibition" // Set the target element's name or ID
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  প্রদর্শনী
                </Link>
                <Link
                  className="text-white px-3 cursor-pointer py-2 rounded-md  font-medium"
                  to="donation" // Set the target element's name or ID
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  অনুদান
                </Link>
                <Link
                  className="text-white px-3 cursor-pointer py-2 rounded-md  font-medium"
                  to="contact" // Set the target element's name or ID
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  যোগাযোগ
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className={`md:hidden ${isMenuOpen ? "open" : ""}`}>
              <button
                onClick={toggleMenu}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover-bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white`}
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                style={{
                  transition: "transform 0.5s ease-in-out",
                  transform: isMenuOpen ? "rotate(180deg)" : "",
                }}
              >
                <span className="sr-only">Open main menu</span>
                {/* ...Your mobile button contents */}
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{
                    transition: "stroke 0.5s ease-in-out",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{
                    transition: "stroke 0.5s ease-in-out",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-white text-lg px-6 rounded-full py-2 text-black font-bold ml-4">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.nirapode1.nirapode1&pcampaignid=web_share&pli=1"
              >
                <button>ডাউনলোড</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden navbar-menu`}
        id="mobile-menu"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Add your mobile menu items here */}
          <Link
            className="text-white px-3 py-2   cursor-pointer font-medium"
            to="home" // Set the target element's name or ID
            spy={true}
            smooth={true}
            duration={500}
          >
            হোম
          </Link>
          <Link
            className="text-white px-3 py-2  cursor-pointer font-medium"
            to="features" // Set the target element's name or ID
            spy={true}
            smooth={true}
            duration={500}
          >
            কি থাকছে
          </Link>
          <Link
            className="text-white px-3 py-2 cursor-pointer   font-medium"
            to="exhibition" // Set the target element's name or ID
            spy={true}
            smooth={true}
            duration={500}
          >
            প্রদর্শনী
          </Link>
          <Link
            className="text-white px-3 cursor-pointer py-2 rounded-md  font-medium"
            to="contact" // Set the target element's name or ID
            spy={true}
            smooth={true}
            duration={500}
          >
            যোগাযোগ
          </Link>
          <Link
            className="text-white px-3 cursor-pointer py-2 rounded-md  font-medium"
            to="donation" // Set the target element's name or ID
            spy={true}
            smooth={true}
            duration={500}
          >
            অনুদান
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
