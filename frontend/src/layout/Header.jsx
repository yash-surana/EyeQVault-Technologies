import React from "react";
import Icon from "/logo-icon.svg";
import Name from "/logo-brandname.svg";

const Header = ({ onContactClick }) => {
  return (
    <header className="absolute w-[90vw] left-1/2 -translate-x-1/2 px-8 top-4 z-50 backdrop-blur-sm rounded-xl bg-white/80 ">
      <div className="flex flex-row justify-between items-center gap-4 py-1">
        <img src={Icon} alt="EyeQVault Icon" className="w-14 h-14" />
        <img src={Name} alt="EyeQVault Brand Name" className="mt-2 scale-125" />
        <button
          className="text-sm font-medium px-4 py-1.5 text-white bg-secondary-gray hover:bg-secondary-gray/70 border-2 border-transparent hover:border-secondary-gray transition-all duration-200 ease-linear rounded-lg cursor-pointer"
          onClick={onContactClick}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
