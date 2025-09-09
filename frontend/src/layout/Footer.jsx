import React from "react";
import NameBanner from "../assets/name-banner.svg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  "Malware Forensics",
  "Network Security",
  "Data Protection and Encryption",
  "Cyber Audit",
  "Risk Management",
  "Data Sanitation",
];
const Footer = ({ onContactClick }) => {
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: true, amount: 0.3 });

  return (
    <footer className="bg-primary-gray pt-12 w-full relative">
      <div className="container px-4 lg:px-12 mx-auto w-full mb-20 lg:mb-40 ">
        <img src="/eyeq.svg" alt="EyeQVault" className="w-32 h-32 scale-175" />
        <div className="justify-between flex flex-col lg:flex-row gap-x-24 gap-y-8 items-start mt-4">
          <div className="text-black/70">
            <p className="lg:w-96  ">
              Securing your business and your money, every minute of the day.
            </p>
            <p className="lg:w-96  pt-4 text-black/50">Contact us:</p>
            <ul className="text-black/50">
              <li>
                Email :{" "}
                <a
                  href="mailto:info@eyeqvault.com"
                  className="text-black/70 hover:underline hover:text-black"
                >
                  info@eyeqvault.com
                </a>
              </li>
              <li>
                Phone :{" "}
                <a
                  href="tel:+916375051662"
                  className="text-black/70 hover:underline hover:text-black"
                >
                  +91 63750 51662
                </a>
              </li>
            </ul>
          </div>
          <div className="gap-x-8 gap-y-2 flex flex-col lg:flex-row flex-wrap justify-end items-start lg:items-center  lg:max-w-[60%] text-left lg:text-right text-black">
            {links.map((link, index) => {
              return (
                <button
                  key={`service-${index}`}
                  onClick={onContactClick}
                  className="whitespace-nowrap cursor-pointer hover:underline hover:text-black/80 transition-all duration-200 min-w-12 "
                >
                  {link}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        ref={bannerRef}
        className="w-full px-4 pb-0.5"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={NameBanner}
          alt="EyeQVault"
          loading="lazy"
          width={1920}
          height={180}
          className="w-full aspect-auto"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
