import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/?contact=true");
  };

  return (
    <div className="common-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6">404</h1>
        <h2 className="mb-8">Page Not Found</h2>
        <p className="text-gray-300 text-lg mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-block text-sm">
            Return to Home
          </Link>
          <Link
            to="/?contact=true"
            className="btn-secondary flex flex-col justify-center items-center"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
