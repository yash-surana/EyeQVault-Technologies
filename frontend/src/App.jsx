import React, { useState, Suspense, lazy, useEffect } from "react";
import Layout from "./layout/Layout";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import { useSearchParams } from "react-router-dom";

// Lazy load components for code splitting
const Services = lazy(() => import("./components/Services"));
const SecurityMethods = lazy(() => import("./components/SecurityMethods"));
const ActiveThreat = lazy(() => import("./components/ActiveThreat"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Offerings = lazy(() => import("./components/Offerings"));
const Contact = lazy(() => import("./components/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-pulse">
      <div className="h-8 w-32 bg-gray-200 rounded-lg"></div>
    </div>
  </div>
);

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [chosenService, setChosenService] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // Check for contact query parameter
  useEffect(() => {
    if (searchParams.get("contact") === "true") {
      setShowContactForm(true);
    }
  }, [searchParams]);

  const handleContactClick = (text) => {
    setShowContactForm(true);
    if (text && typeof text === "string") {
      setChosenService(text);
    }
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
    setChosenService("");
    // Remove the contact parameter from URL when closing the form
    if (searchParams.has("contact")) {
      searchParams.delete("contact");
      setSearchParams(searchParams);
    }
  };

  return (
    <Layout onContactClick={handleContactClick}>
      <Hero onContactClick={handleContactClick} />

      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SecurityMethods />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ActiveThreat />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Offerings onContactClick={handleContactClick} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact onContactClick={handleContactClick} />
      </Suspense>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          onClose={handleCloseContactForm}
          chosenService={chosenService}
        />
      )}
    </Layout>
  );
}

export default App;
