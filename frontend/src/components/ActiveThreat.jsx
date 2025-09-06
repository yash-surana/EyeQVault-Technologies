import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
// Remove the direct import
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import WorldAnimation from "../assets/WorldAnimation.lottie";

// Logos
import GOILogo from "../assets/logos/goi.svg";
import MinistryOfFinanceLogo from "../assets/logos/ministryoffinance.svg";
import HomeAffairsLogo from "../assets/logos/homeaffairs.svg";
import HPLogo from "../assets/logos/hp.svg";
import {
  containerVariants,
  itemVariants,
  logoContainerVariants,
  titleVariants,
  backgroundVariants,
} from "../utils/animationVariants";

// Create a lazy-loaded component for the Lottie animation
const LottieAnimation = lazy(() => {
  // Only import the animation when this component is loaded
  return Promise.all([
    import("@lottiefiles/dotlottie-react"),
    import("../assets/WorldAnimation.lottie"),
  ]).then(([{ DotLottieReact }, WorldAnimation]) => ({
    default: (props) => (
      <DotLottieReact src={WorldAnimation.default} {...props} />
    ),
  }));
});

const ActiveThreat = () => {
  const threats = [
    {
      percentage: 185,
      description: "Surge in global malware infections",
    },
    {
      percentage: 236,
      description: "Increase in failure of traditional defenses",
    },
    {
      percentage: 83,
      description: "Rise in financial service breaches",
    },
    {
      percentage: 68,
      description: "Breaches happen due to internal team, not just tech",
    },
  ];

  const ref = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const animationInView = useInView(animationRef, {
    once: true,
    margin: "200px",
  });
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [loadAnimation, setLoadAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      threats.forEach((threat, index) => {
        setTimeout(() => {
          let start = 0;
          const end = threat.percentage;
          const duration = 1500;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }, 16);
        }, index * 300);
      });
    }
  }, [isInView]);

  // Add effect to load animation when it's about to come into view
  useEffect(() => {
    if (animationInView) {
      setLoadAnimation(true);
    }
  }, [animationInView]);

  return (
    <section
      className="overflow-hidden bg-primary-black relative"
      ref={sectionRef}
    >
      <motion.div
        className="absolute top-10 right-0 w-full h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(245deg, rgba(40, 40, 40, 0.6) 0%, rgba(30, 30, 30, 0.3) 70%, transparent 70%)",
          filter: "blur(60px)",
        }}
        variants={backgroundVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      />
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(50, 50, 50, 0.4) 0%,  transparent 80%)",
          filter: "blur(80px)",
        }}
        variants={backgroundVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
      />
      {/* Logo Marquee */}
      <div className="mb-12 px-4 overflow-hidden py-12 container mx-auto">
        <motion.div
          className="flex flex-row gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-10 py-6 px-4 rounded-xl"
            variants={logoContainerVariants}
          >
            {[GOILogo, MinistryOfFinanceLogo, HomeAffairsLogo, HPLogo].map(
              (logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/10 rounded-lg h-24 w-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:content-[''] before:top-[-75%] before:left-[-75%] before:w-[150%] before:blur-3xl before:h-[150%] before:bg-gradient-to-br before:from-transparent before:via-white/30 before:to-transparent before:rotate-45 before:transition-transform before:duration-700 hover:before:translate-x-[100%] hover:before:translate-y-[100%]"
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                >
                  <img
                    src={logo}
                    loading="lazy"
                    alt={`Partner logo ${index + 1}`}
                    className="max-h-16 w-full h-full max-w-full object-contain"
                    width={64}
                    height={64}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
      <div className="container mx-auto w-full px-6 lg:px-10 relative">
        <motion.div
          className="text-left mb-12 md:mb-20"
          variants={titleVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-white mb-4" variants={titleVariants}>
            The threat to businesses is expanding
          </motion.h2>
          <motion.h3
            className="text-white/70"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            With attacks happening around the world, how prepared are you?
          </motion.h3>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto lg:absolute lg:left-0 lg:right-0 z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              className={`text-center ${
                index === 0 || index === 3 ? "lg:pt-12" : ""
              }`}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 300,
                },
              }}
            >
              <motion.h4
                className="text-h2 font-bold text-white mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {counters[index]}%
              </motion.h4>
              <motion.p
                className="text-white/70 text-base lg:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                {threat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={animationRef}
          className="flex justify-center pt-24 lg:pt-48 pb-12 overflow-hidden -z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: sectionInView ? 1 : 0,
            y: sectionInView ? 0 : 50,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          {loadAnimation && (
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 12,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0, -1, 0],
                transition: {
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <Suspense
                fallback={
                  <div className="w-64 h-64 bg-gray-800 rounded-full animate-pulse"></div>
                }
              >
                <LottieAnimation
                  loop
                  autoplay
                  className="scale-200 lg:scale-150 transition duration-500 ease-in"
                />
              </Suspense>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ActiveThreat;
