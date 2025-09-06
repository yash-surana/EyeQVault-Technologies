import React from "react";
import Icon from "/logo-icon.svg";
import Name from "/logo-brandname.svg";
import { motion } from "framer-motion";

const Header = ({ onContactClick }) => {
  return (
    <header className="absolute w-[90vw] left-1/2 -translate-x-1/2 px-4 lg:px-8 top-4 z-50 backdrop-blur-sm rounded-xl bg-white/80 ">
      <div className="flex flex-row justify-between items-center gap-4 py-2">
        <img
          src={Icon}
          alt="EyeQVault Icon"
          className="h-8 scale-110 hidden w-0 md:w-auto md:inline-block"
        />
        <img src={Name} alt="EyeQVault Brand Name" className="mt-0.5 h-5 " />
        <motion.button
          className="text-sm font-medium px-2 md:px-4 py-1.5 text-white bg-secondary-gray hover:bg-secondary-gray/70 border-2 border-transparent hover:border-secondary-gray transition-all duration-200 ease-linear rounded-lg cursor-pointer"
          onClick={onContactClick}
          whileTap={{ scale: 0.95 }}
        >
          Contact <span className="hidden lg:inline-block">Us</span>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
