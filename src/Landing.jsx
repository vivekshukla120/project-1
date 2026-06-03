import React, { useState, useEffect } from "react";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab-1");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll for anchor links
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Preloader Animation */}
      <div
        id="preloader"
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0c1a] transition-opacity duration-500"
      >
        <div className="w-12 h-12 border-4 border-[#f8c04e] border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Top Scroll Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-40 w-10 h-10 bg-[#f8c04e] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#e0a83a] transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-[#0a0c1a]/90 backdrop-blur-md transition-all duration-300 py-4 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="logo">
              <a
                href="#"
                className="text-2xl font-bold tracking-wider text-white"
              >
                <span className="text-[#f8c04e]">Crypto</span>con
              </a>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <a
                href="#"
                className="btn px-4 py-2 text-sm bg-[#f8c04e] text-[#0a0c1a] rounded-md font-semibold hover:bg-[#e0a83a] transition"
              >
                Sign in
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-[#0a0c1a] md:bg-transparent shadow-md md:shadow-none z-20 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 py-6 md:py-0 px-4 md:px-0">
                <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-white font-medium">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => handleScroll(e, "banner")}
                      className="hover:text-[#f8c04e] transition"
                    >
                      Home
                    </a>
                  </li>
                  <li className="relative group">
                    <a href="#" className="hover:text-[#f8c04e] transition">
                      Pages
                    </a>
                    <ul className="absolute left-0 top-full bg-[#1a1c2a] p-3 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 w-40">
                      <li>
                        <a href="#" className="block py-1 hover:text-[#f8c04e]">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-1 hover:text-[#f8c04e]">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-1 hover:text-[#f8c04e]">
                          Token Sale
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-1 hover:text-[#f8c04e]">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => handleScroll(e, "features")}
                      className="hover:text-[#f8c04e] transition"
                    >
                      Feature
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => handleScroll(e, "roadmap")}
                      className="hover:text-[#f8c04e] transition"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => handleScroll(e, "team")}
                      className="hover:text-[#f8c04e] transition"
                    >
                      Team
                    </a>
                  </li>
                </ul>
                <div className="signin hidden md:block">
                  <a
                    href="#"
                    className="btn px-6 py-2 bg-[#f8c04e] text-[#0a0c1a] rounded-md font-semibold hover:bg-[#e0a83a] transition"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section
        id="banner"
        className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#0a0c1a] to-[#14172b]"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 animate-fadeInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Invest In Cryptocoin Way To Trade
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[#f8c04e] text-[#0a0c1a] font-semibold rounded-md hover:bg-[#e0a83a] transition shadow-lg"
              >
                Learn more
              </a>
            </div>
            <div className="w-full md:w-1/2 animate-fadeInRight">
              <img
                src="images/banner-img.png"
                alt="banner"
                className="w-full max-w-md mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://themes.templatescoder.com/crypton/html/demo/1-3/02-Dark-Theme/images/banner-img.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Cryptcon Section */}
      <section className="py-20 bg-[#0f1111]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
              what is cryptcon
            </label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How it Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 animate-fadeInLeft text-center">
              <img
                src="https://themes.templatescoder.com/crypton/html/demo/1-3/02-Dark-Theme/images/work-process.png"
                alt="Work Process"
                className="w-full max-w-md mx-auto animate-spin-slow"
              />
            </div>
            <div className="w-full md:w-1/2 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-white mb-4">
                We've built a platform to buy and sell shares.
              </h3>
              <p className="text-gray-300 mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#f8c04e] mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f8c04e] mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f8c04e] mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
        <section id="features" className="py-20 bg-[#14172b] bg-opacity-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 animate-fadeInUp">
              <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
                cryptcon Feature
              </label>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Best Features
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-[#0f1222] p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${item * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto bg-[#f8c04e]/10 rounded-full flex items-center justify-center">
                    <img
                      src={`https://placehold.co/50x50/f8c04e/0a0c1a?text=Icon${item}`}
                      alt="feature"
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-5 mb-3">
                    early bonuse
                  </h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed
                    do eiusmod tempor incididunt ut labore et.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-[#0f1222]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
              roadmap
            </label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              The Timeline
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#2a2e4a] hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["March 2021", "April 2021", "May 2021", "August 2021"].map(
                (date, idx) => (
                  <div
                    key={idx}
                    className="text-center relative animate-fadeInLeft"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="bg-[#1a1c2a] p-4 rounded-lg shadow-md mb-4">
                      <div className="text-[#f8c04e] font-bold">{date}</div>
                      <div className="w-4 h-4 bg-[#f8c04e] rounded-full mx-auto my-2"></div>
                      <p className="text-gray-300 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#14172b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
              meet the team
            </label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Team
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#0f1222] p-5 rounded-xl animate-fadeInLeft">
              <img
                src="https://austinfilm.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/07/29115643/john-doe-jim-herrington-cropped-1024x675.jpg "
                alt="team member"
                className="w-28 h-28 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/120x120/2a2e4a/f8c04e?text=John+Doe";
                }}
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-white">John Doe</h4>
                <p className="text-gray-300 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.968-11.89c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#0f1222] p-5 rounded-xl animate-fadeInRight">
              <img
                src="https://www.dundee.ac.uk/sites/default/files/styles/card_portrait/public/2024-06/Jane-Smith.jpg.webp?h=c1dc774f&itok=O0BusAAm"
                alt="team member"
                className="w-28 h-28 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/120x120/2a2e4a/f8c04e?text=Jane+Smith";
                }}
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-white">Jane Smith</h4>
                <p className="text-gray-300 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.968-11.89c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#0f1222] p-5 rounded-xl animate-fadeInLeft">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02I5zJJI3O0mAfIUgnc5uzTL4W7AZEFK_9Q&s"
                alt="team member"
                className="w-28 h-28 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/120x120/2a2e4a/f8c04e?text=Mike+Johnson";
                }}
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-white">Mike Johnson</h4>
                <p className="text-gray-300 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.968-11.89c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#0f1222] p-5 rounded-xl animate-fadeInRight">
              <img
                src="https://images-cdn.reedsy.com/avatar/1197240/c03c10bc0a25cd8fcb6c6d8c08c0759169e67798.jpg"
                alt="team member"
                className="w-28 h-28 rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/120x120/2a2e4a/f8c04e?text=Sarah+Williams";
                }}
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-white">Sarah Williams</h4>
                <p className="text-gray-300 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.968-11.89c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f8c04e] transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Sale Section */}
      <section className="py-20 bg-[#0f1222] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 animate-fadeInLeft">
              <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
                token
              </label>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Token Sale
              </h2>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-300">
                  <span>73% Financial Overhead</span>
                  <span className="text-[#f85d77]">●</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>55% Bonus & fund</span>
                  <span className="text-[#5ad6f8]">●</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>12% Gift Code Inventory</span>
                  <span className="text-[#f8c04e]">●</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>32% Bounty and Overhead</span>
                  <span className="text-[#ac56f7]">●</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>38% IT infrastructure</span>
                  <span className="text-[#61f89f]">●</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 animate-fadeInRight text-center">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://placehold.co/80x80/f8c04e/0a0c1a?text=Logo"
                    alt="graph logo"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f85d77"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#5ad6f8"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="67.8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f8c04e"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="135.6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ac56f7"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="203.4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#61f89f"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="226.1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#14172b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
              news
            </label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Blog
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((blog) => (
              <div
                key={blog}
                className="bg-[#0f1222] rounded-xl overflow-hidden shadow-md animate-fadeInUp"
                style={{ animationDelay: `${blog * 0.1}s` }}
              >
                <img
                  src={`https://placehold.co/400x250/2a2e4a/f8c04e?text=Blog+${blog}`}
                  alt="blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Cryptocash is a clean, modern template clean
                  </h3>
                  <div className="flex gap-3 text-gray-400 text-sm mb-3">
                    <span>March 20,2021</span>
                    <span>by John Doe</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" className="text-[#f8c04e] hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICO Mobile App Section */}
      <section className="py-20 bg-[#0f1222]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1 animate-fadeInLeft">
              <img
                src="https://themes.templatescoder.com/crypton/html/demo/1-3/02-Dark-Theme/images/ico-img.png"
                alt="mobile apps"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 animate-fadeInRight">
              <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
                ico apps
              </label>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                ICO Mobile App
              </h2>
              <p className="text-gray-300 mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#f8c04e]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300">Crypto-news curation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f8c04e]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300">
                    Natural Language Understanding
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f8c04e]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300">
                    Et harum quidem rerum facilis est et expedita distinctio.
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[#f8c04e] text-[#0a0c1a] font-semibold rounded-md hover:bg-[#e0a83a] transition"
              >
                get the app now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#14172b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <label className="text-[#f8c04e] uppercase tracking-wider text-sm font-semibold">
              Faqs
            </label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Frequently Asked questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeInUp">
            {["general", "pre-ico & ico", "Tokens", "client", "legal"].map(
              (tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(`tab-${idx + 1}`)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${activeTab === `tab-${idx + 1}` ? "bg-[#f8c04e] text-[#0a0c1a]" : "bg-[#0f1222] text-gray-300 hover:bg-[#1a1c2a]"}`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp">
            {activeTab === "tab-1" && (
              <>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    What is Ico Crypto?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    What cryptocurrencies can I use to purchase?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    How can I participate in the ICO Token sale?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    How do I benefit from the ICO Token?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </>
            )}
            {activeTab === "tab-2" && (
              <>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    How can I participate in the ICO Token sale?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    What is Ico Crypto?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </>
            )}
            {activeTab === "tab-3" && (
              <>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    How can I participate in the ICO Token sale?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    What cryptocurrencies can I use to purchase?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </>
            )}
            {activeTab === "tab-4" && (
              <>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    How can I participate in the ICO Token sale?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    What cryptocurrencies can I use to purchase?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </>
            )}
            {activeTab === "tab-5" && (
              <>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    What cryptocurrencies can I use to purchase?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    How do I benefit from the ICO Token?
                  </h4>
                  <p className="text-gray-300">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0c1a] border-t border-[#1a1c2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-[#1a1c2a]">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-[#f8c04e]">Crypto</span>con
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f8c04e] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f8c04e] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.968-11.89c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#f8c04e] transition">
                    What is ico
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#f8c04e] transition">
                    ICO Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#f8c04e] transition">
                    Join Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#f8c04e] transition">
                    Tokens
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#f8c04e] transition">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#f8c04e] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <label className="text-white block mb-2">
                Subscribe to our Newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  className="px-4 py-2 bg-[#1a1c2a] text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#f8c04e] w-full max-w-xs"
                />
                <button className="px-4 py-2 bg-[#f8c04e] text-[#0a0c1a] font-semibold rounded-r-md hover:bg-[#e0a83a] transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-6 text-gray-400 text-sm">
            <p>
              © Cryptcon all Rights Reserved. Designed By{" "}
              <a href="#" className="text-[#f8c04e]">
                TemplatesCoder.com
              </a>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#f8c04e] transition">
                Terms & Condition
              </a>
              <a href="#" className="hover:text-[#f8c04e] transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f8c04e] transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        #preloader {
          animation: fadeOut 0.5s ease-out 0.5s forwards;
        }
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
