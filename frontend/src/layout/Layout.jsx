import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, onContactClick }) => {
  return (
    <div className="min-h-screen bg-cyber-darker">
      <Header onContactClick={onContactClick} />
      <main>{children}</main>
      <Footer onContactClick={onContactClick} />
    </div>
  );
};

export default Layout;
