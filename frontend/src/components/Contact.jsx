import React from "react";
import { motion } from "framer-motion";
import GraphicBorderSvg from "../assets/illustrations/graphic-border.svg";
import { titleVariants } from "../utils/animationVariants";

const popupVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Contact = ({ onContactClick }) => {
  return (
    <motion.section
      className="lg:py-20 relative overflow-hidden bg-primary-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={popupVariants}
    >
      <motion.div
        className="container mx-auto w-full px-4 lg:px-10 flex flex-col sm:flex-row gap-y-0 gap-x-4 justify-center items-center overflow-hidden"
        variants={titleVariants}
      >
        <img
          src={GraphicBorderSvg}
          alt="graphic-border"
          className="rotate-90 sm:rotate-0 scale-x-[-1] animate-pulse-white"
        />
        <div className="text-center lg:max-w-5xl mx-auto -my-36 lg:mt-0 lg:mb-16 lg:py-4">
          <h2 className="text-white mb-8">
            Protect your company from every attack.
          </h2>
          <h3 className="text-h4 font-medium text-white/90 ">
            {" "}
            With EyeQVault, security and safety will become your process,
            <br />
            not an after thought.
          </h3>

          <motion.button
            onClick={onContactClick}
            className="btn-primary mt-16"
            whileTap={{ scale: 0.95 }}
          >
            Talk to our Cyber Experts
          </motion.button>
        </div>
        <img
          src={GraphicBorderSvg}
          alt="graphic-border"
          className="rotate-90 sm:rotate-0 animate-pulse-white"
        />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
