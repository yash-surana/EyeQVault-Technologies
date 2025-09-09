import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background1 from "/backgrounds/background-1.svg";
import Background2 from "/backgrounds/background-2.svg";
import Background3 from "/backgrounds/background-3.svg";
import Background4 from "/backgrounds/background-4.svg";
const slides = [
  {
    background: Background1,
    title:
      "Protect more than data - protect your reputation, your boardroom trust, and your 8-hour sleep.",
    subtitle: "Because real security is peace of mind.",
    alt: "Security protection visualization background",
  },
  {
    background: Background2,
    title:
      "We make secure behaviour second nature for your team - no worrying about who clicked what.",
    subtitle: "From untrained confusion to skilled confidence, overnight.",
    alt: "Team security training visualization background",
  },
  {
    background: Background3,
    title: "Don't let them phish your money away",
    subtitle: "One careless click doesn't have to cost millions.",
    alt: "Anti-phishing protection visualization background",
  },
  {
    background: Background4,
    title: "With EyeQVault, protection is always priced right.",
    subtitle: "World-class security without a world-class bill.",
    alt: "Cost-effective security visualization background",
  },
];

const Hero = ({ onContactClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0); // Start at 0%
  const slideInterval = useRef(null);
  const slideDuration = 8000; // 8 seconds per slide
  const updateFrequency = 400; // Update progress every 100ms

  // Function to start slide timer with progress updates
  const startSlideTimer = () => {
    // Clear any existing interval
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    // Reset progress to 0%
    setSlideProgress(0);

    // Start new interval for progress updates
    let timeElapsed = 0;
    slideInterval.current = setInterval(() => {
      timeElapsed += updateFrequency;
      const newProgress = (timeElapsed / slideDuration) * 100;
      if (timeElapsed >= slideDuration) {
        // Time to change slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        timeElapsed = 0;
        setSlideProgress(0);
      } else {
        setSlideProgress(newProgress);
      }
    }, updateFrequency);
  };

  // Initialize slide timer on component mount
  useEffect(() => {
    startSlideTimer();

    // Cleanup on unmount
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [slides.length]);

  // Reset timer when manually changing slides
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  return (
    <section
      className="relative min-h-[100vh] h-full overflow-hidden bg-primary-black"
      aria-label="EyeQVault"
      role="region"
    >
      {/* Background Image with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-center bg-no-repeat min-h-screen pt-20 bg-primary-black"
          style={{
            backgroundImage: `url(${slides[currentSlide].background})`,
            backgroundSize: "cover",
            opacity: 0.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          role="img"
          aria-label={slides[currentSlide].alt}
        />
      </AnimatePresence>

      {/* Overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 lg:px-16 gap-8">
        {/* Main content area */}
        <div className="flex-grow flex flex-col justify-end items-start text-left pt-16 lg:max-w-[70vw]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              className="text-white h1-quote"
              id={`slide-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              className="mb-8 pt-2 lg:pt-4 text-h5 text-white/85 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={onContactClick}
              className="btn-primary cursor-pointer w-full sm:w-auto"
              aria-label="Contact us to safeguard your business"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Safeguard your business today
            </motion.button>
            <motion.p
              className="text-sm text-white pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              No jargon. No noise. <br className="sm:hidden" />
              Just expert protection that works
            </motion.p>
          </motion.div>
        </div>

        {/* Slide Indicators with ARIA attributes */}
        <motion.div
          className="flex justify-start lg:justify-end space-x-2 z-10 lg:px-4 pb-8 md:pb-12 lg:pb-20 lg:pr-8"
          role="tablist"
          aria-label="Presentation slides"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <motion.button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`relative h-2 transition-all duration-300 hover:scale-125 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-white scale-125 w-6 rounded-lg"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75 w-3 rounded-full"
                }`}
                role="tab"
                aria-selected={isActive}
                aria-label={`Slide ${index + 1}: ${slide.title.substring(
                  0,
                  30
                )}...`}
                aria-controls={`slide-${index}`}
                whileTap={{ scale: 0.9 }}
              >
                {/* Dynamic progress indicator */}
                {isActive && (
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full bg-blue-600 origin-left"
                    style={{
                      transform: `scaleX(${slideProgress / 100})`,
                    }}
                    transition={{ duration: 0.4, ease: "linear" }}
                    aria-hidden="true"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
