"use client";

import { useState } from "react";

export const WelcomeSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Welcome to Qute Pants
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Experience the perfect blend of comfort and style with our
                premium collection of pants. Each piece is carefully crafted
                with attention to detail and quality.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From casual everyday wear to elegant formal occasions, we have
                the perfect fit for you. Our commitment to quality ensures that
                every pair meets the highest standards.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all">
                Learn More
              </button>
            </div>

            <div className="relative group cursor-pointer animate-fadeInUp animation-delay-200">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="h-80 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-xl">Video Preview</span>
                </div>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg animate-pulse">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-4xl w-full animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">YouTube Video Player Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
