import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CaseStudyIcon from "../assets/icons/CaseStudyIcon.svg";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  titleVariants,
  cardHoverVariants,
  imageHoverVariants,
} from "../utils/animationVariants";

const cases = [
  {
    title: "Full Control Restored After Malware Attack",
    story:
      "A listed company in India's financial capital suffered a malware breach, losing critical data. <br />Our team moved fast - running a forensic investigation to trace the breach, isolate the access point, and neutralise the intruder. Once secured, we restored systems and reinforced defences to prevent repeat attempts.",
    result:
      "The company regained full control of its infrastructure and avoided long-term reputational damage.",
  },
  {
    title: "Court-Ready Evidence in a Corporate Fraud Case",
    story:
      "A large corporation suspected internal fraud after noticing irregular data leaks affecting sensitive policies and client information.  <br />We conducted deep forensic analysis of employee devices, emails, and digital footprints. The investigation uncovered tampered files and communications, giving the company court-admissible evidence to take legal action. At the same time, we plugged the leak to safeguard ongoing client confidentiality.",
    result:
      "The organisation stopped the fraud in its tracks and entered court proceedings with defensible digital proof.",
  },
  {
    title: "Secured Government Records With Zero Interruption",
    story:
      "We designed and deployed a secure platform with strict access controls, full endpoint protection, and detailed activity logs. <br /> This ensured that only authorised users could view or modify records - while maintaining smooth day-to-day operations without downtime.",
    result:
      "Sensitive records stayed fully intact, with zero data loss or disruption from outside",
  },
];

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cases.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden bg-primary-black">
      <div className="common-container !pt-20">
        <motion.div
          className="text-left mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-white mb-4" variants={titleVariants}>
            A cyber attack can happen with anyone
          </motion.h2>
          <motion.h3 className="text-white/70" variants={itemVariants}>
            Here's how we helped teams -
          </motion.h3>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-sm h-full w-full flex-shrink-0"
                  variants={itemVariants}
                  whileHover="hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                >
                  <h4 className="text-white mb-6">{caseStudy.title}</h4>
                  <p
                    className="text-white/90 text-base leading-loose mb-6"
                    dangerouslySetInnerHTML={{ __html: caseStudy.story }}
                  />
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-white/70 font-medium text-base">
                      Result: {caseStudy.result}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <motion.div
            className="flex justify-between items-center gap-4 mt-10"
            variants={containerVariants}
          >
            <motion.img
              src={CaseStudyIcon}
              alt="Case Study Icon"
              variants={imageHoverVariants}
              whileHover="hover"
            />
            {/* Slide Indicators */}

            {/* Previous Button */}
            <div className="flex justify-end gap-4 items-center">
              <div className="flex space-x-2">
                {cases.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                      currentSlide === index ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={prevSlide}
                className="hover:bg-white/20 border border-white/20 rounded-full p-2 transition-colors duration-200 flex justify-center items-center cursor-pointer"
                aria-label="Previous slide"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <ChevronLeftIcon className="w-5 h-5 text-white" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={nextSlide}
                className=" hover:bg-white/20 border border-white/20 rounded-full p-2 transition-colors duration-200 flex justify-center items-center cursor-pointer"
                aria-label="Next slide"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
