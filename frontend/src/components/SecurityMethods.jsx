import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import DiamondSteps from "./DiamondSteps";
import DiamondSVG from "../assets/illustrations/diamond.svg";
import { imageCardHoverVariants } from "../utils/animationVariants";

const steps = [
  {
    title: "Diagnose & Detect",
    description:
      "We examine your systems and your stakeholder behaviours to identify weaknesses before an attacker does.",
    actions: [
      "Security audits & gap analysis",
      "Compliance & risk profiling",
      "Forensic diagnosis (malware traces, breach paths)",
    ],
  },
  {
    title: "Implement Protections",
    description:
      "Once vulnerabilities are clear, we close them by deploying endpoint protection to segmenting networks and tightening access controls, we make sure every gap is sealed.",
    actions: [
      "Endpoint protection deployment",
      "Network segmentation and firewall rules",
      "Encryption and secure access controls",
    ],
  },
  {
    title: "Avoidance Structures",
    description:
      "Security needs to be second nature for all people and processes. By training employees, enforcing role-based access, and setting up clear incident playbooks.",
    actions: [
      "SOPs for daily operations",
      "Awareness training for employees",
      "Privilege restrictions and role-based access",
      "Incident playbooks",
    ],
  },
  {
    title: "Monitor & Report",
    description:
      "Stay ahead with continuous watch and rapid response. Cybersecurity isn't static - it's a moving target. That's why we continuously monitor and report.",
    actions: [
      "24/7 threat monitoring",
      "Incident logging and forensic capture",
      "Reporting to key stakeholders",
      "Continuous compliance tracking",
    ],
  },
  {
    title: "Observe evolving threats",
    description:
      "The threat landscape constantly evolves, and so must our defenses. We continuously analyze emerging threats and adapt our security measures accordingly.",
  },
  {
    title: "Neutralise threats",
    description:
      "When threats are detected, swift action is critical. We implement immediate containment and neutralization protocols to minimize impact and prevent spread.",
  },
  {
    title: "Diagnose & Detect",
    description:
      "Post-incident analysis ensures we learn from every security event. We conduct thorough forensic analysis to understand attack vectors and strengthen defenses.",
  },
];

const SecurityMethods = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep >= 7 ? 0 : prevStep + 1));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Auto-scroll to active step
  // useEffect(() => {
  //   if (stepRefs.current[activeStep]) {
  //     const element = stepRefs.current[activeStep];
  //     const isTopSection = activeStep <= 3;

  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: isTopSection ? "start" : "end",
  //       inline: "nearest",
  //     });

  //     // Calculate scroll position
  //     const headerOffset = isTopSection ? 50 : -50; // Negative offset for bottom sections
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [activeStep]);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <section className=" bg-primary-gray text-black">
      <div className="common-container">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2">How do we work? Our D.I.A.M.O.N.D Framework</h2>
          <h3 className="text-black/70">
            How We Keep Your Business Secure Every Day, Every Hour.
          </h3>
          <p className="pt-4 text-sm lg:text-base leading-relaxed font-medium text-black/70">
            We don't believe in one time fixes. <br />
            At EyeQVault, we follow our Diamond Cybersecurity Framework - a
            continuous cycle that diagnoses risks, fixes vulnerabilities, builds
            resilient behaviours, and monitors constantly. This way, your
            business stays prepared for today's threats and tomorrow's.
          </p>
        </motion.div>
        <div className="flex flex-col">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {steps.slice(0, 4).map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-500 cursor-pointer min-h-full flex flex-col ${
                  activeStep === index
                    ? "opacity-100 scale-100"
                    : "lg:opacity-60 lg:scale-90"
                }`}
                onClick={() => handleStepClick(index)}
              >
                <h3 className="text-h4 black-gray-text-gradient">
                  {index + 1}.{" "}
                  <span>
                    <span className="text-blue-900">
                      {step.title.charAt(0)}
                    </span>
                    {step.title.slice(1)}
                  </span>
                </h3>
                <p className="pt-6 text-sm text-gray-800 flex-grow">
                  {step.description}
                </p>
                {step.actions && activeStep === index ? (
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-gray-800">
                    {step.actions.map((action, actionIndex) => (
                      <li key={step.title + "-actions-" + actionIndex}>
                        {action}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-start">
            {steps.slice(4).map((step, index) => (
              <div
                key={index + 4}
                ref={(el) => (stepRefs.current[index + 4] = el)}
                className={`transition-all duration-500 cursor-pointer min-h-full flex flex-col ${
                  activeStep === index + 4
                    ? "opacity-100 scale-100"
                    : "lg:opacity-60 lg:scale-90"
                }`}
                onClick={() => handleStepClick(index + 4)}
              >
                <h3 className="text-h4 black-gray-text-gradient">
                  {index + 5}.{" "}
                  <span>
                    <span className="text-blue-900">
                      {step.title.charAt(0)}
                    </span>
                    {step.title.slice(1)}
                  </span>
                </h3>
                <p className="pt-6 text-sm text-gray-800 flex-grow">
                  {step.description}
                </p>
                {step.actions && activeStep === index + 4 ? (
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-gray-800">
                    {step.actions.map((action, actionIndex) => (
                      <li key={step.title + "-actions-" + actionIndex}>
                        {action}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          {/* Diamond steps */}
          <div className=" flex w-full justify-center items-center mt-6 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="z-0"
              whileHover={imageCardHoverVariants.hoverWithMovement}
            >
              <img
                src={DiamondSVG}
                alt="Diamond background"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* <div className="relative z-10">
              <DiamondSteps activeStep={activeStep + 1} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityMethods;
