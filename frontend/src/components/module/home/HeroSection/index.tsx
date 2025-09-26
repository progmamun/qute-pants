"use client";

import { CarouselSlide } from "@/types";
import { useEffect, useState } from "react";

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Premium Quality Pants",
      subtitle: "Comfort meets style in every stitch",
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "New Collection",
      subtitle: "Discover our latest designs",
      cta: "Explore",
    },
    {
      id: 3,
      title: "Perfect Fit Guaranteed",
      subtitle: "Find your ideal size today",
      cta: "Size Guide",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp animation-delay-200">
              {slide.subtitle}
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all animate-fadeInUp animation-delay-400">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
