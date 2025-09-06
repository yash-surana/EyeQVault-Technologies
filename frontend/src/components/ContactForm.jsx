import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ContactForm = ({ onSubmit, onClose, message }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: message,
  });

  // Add useEffect to handle Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleEscapeKey);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/add-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          key="modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-h-[90vh] bg-primary-black border border-white/20 overflow-auto rounded-lg p-8 max-w-2xl w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button using Heroicons */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
            aria-label="Close"
          >
            <XMarkIcon className="w-4 h-4 min-w-4" />
          </button>

          <div className="mb-6">
            <h2 className="mb-2 text-white/90">
              Your business deserves more than defense
            </h2>
            <p className="text-white/70 text-base">
              It deserves confidence. Reach out and let EyeQVault step with your
              network so we can become part of your success story.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-row gap-4 justify-between items-center">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-gray-500 focus:outline-none focus:bg-white/10 text-sm"
                placeholder="First Name*"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-gray-500 focus:outline-none focus:bg-white/10 text-sm"
                placeholder="Last Name*"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-gray-500 focus:outline-none focus:bg-white/10 text-sm"
                placeholder="Email*"
              />
            </div>

            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-gray-500 focus:outline-none focus:bg-white/10 text-sm"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-gray-500 focus:outline-none focus:bg-white/10 text-sm resize-none"
                placeholder="Message"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className={`btn-secondary w-full text-base ${
                  loading ? "cursor-not-allowed opacity-75" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="animate-pulse">Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Request Callback</span>
                    <span className="ml-2">→</span>
                  </>
                )}
              </button>
            </div>
            {status === "success" && (
              <p
                className="
              text-center"
              >
                ✅ Message sent! We'll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p
                className="
              text-center"
              >
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
