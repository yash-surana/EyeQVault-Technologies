import React, { useState, Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

// Lazy load components for code splitting
const Services = lazy(() => import("./components/Services"));
const SecurityMethods = lazy(() => import("./components/SecurityMethods"));
const ActiveThreat = lazy(() => import("./components/ActiveThreat"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="w-8 h-8 border-2 border-cyber-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
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
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact onContactClick={handleContactClick} />
      </Suspense>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
    </Layout>
  );
}

export default App;
