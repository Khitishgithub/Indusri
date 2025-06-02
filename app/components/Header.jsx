"use client";
import React, { useState } from "react";
import {
  Twitter,
  Github,
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/industry.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-60" />

      <header className="relative z-20 flex items-center justify-between px-6 py-4 lg:px-12 lg:py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded transform rotate-45"></div>
          <span className="text-white text-xl font-bold">industri</span>
        </div>

        <div className="flex-grow flex justify-center">
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Pages", "Blog", "Shop", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className={`relative group text-white hover:text-orange-300 transition-colors ${
                    item === "Home" ? "text-orange-400" : ""
                  }`}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>
        </div>

        {/* Animated Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8 z-30 relative"
        >
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden z-10 bg-black/80 backdrop-blur-sm absolute top-16 w-full px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {["Home", "About", "Pages", "Blog", "Shop", "Contact"].map(
          (item, idx) => (
            <a
              key={item}
              href="#"
              className={`block text-white hover:text-orange-300 transition-all duration-300 delay-${
                idx * 75
              } ${item === "Home" ? "text-orange-400" : ""}`}
            >
              {item}
            </a>
          )
        )}
      </div>

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 uppercase tracking-wider text-2xl mb-4 ">
            Discount
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get 10% Flat Off On Your
            <br />
            <span className="text-orange-400">First Service</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.
            Ferror ac turpis egestas maecenas pharetra convallis posuere morbi.
            Commodo sed. Ferror ac turpis egestas maecenas pharetra.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition-colors font-medium inline-flex items-center space-x-2 mb-8">
            <span>Know More</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Social Links - Left side for desktop */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-4 mb-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 border-2 border-orange-400 bg-gray-800 bg-opacity-50 rounded flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links - Bottom center for mobile */}
      {/* Social Links - Bottom center for mobile (scrolls with page) */}
      <div className="lg:hidden mt-12 flex justify-center space-x-4">
        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="w-9 h-9 border-2 border-orange-400 bg-gray-800 bg-opacity-70 rounded flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Scroll More Text - Right side for desktop */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 rotate-90 z-20 hidden lg:block">
        <div className="flex items-center space-x-2">
          <p className="text-orange-400 text-sm tracking-widest opacity-60">
            SCROLL MORE
          </p>
          <div className="w-10 h-0.5 bg-orange-400 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Header;
