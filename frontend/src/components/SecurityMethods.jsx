import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import DiamondSVG from "../assets/illustrations/diamond.svg";
import { imageCardHoverVariants } from "../utils/animationVariants";
import Lines2 from "../assets/illustrations/lines-2.svg";
import Lines1 from "../assets/illustrations/lines-1.svg";

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
  const [progress, setProgress] = useState(0);
  const stepRefs = useRef([]);
  const STEP_DURATION = 7000; // 7 seconds per step

  useEffect(() => {
    // Reset progress when active step changes
    setProgress(0);

    // Set up interval to update progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (STEP_DURATION / 100);
      });
    }, 100);

    // Set up interval to change active step
    const stepInterval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep >= 6 ? 0 : prevStep + 1));
    }, STEP_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [activeStep]);

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
    setProgress(0); // Reset progress when manually changing steps
  };

  return (
    <section className="bg-primary-gray text-black">
      <div className="">
        <motion.div
          className="text-left mb-12 common-container !pb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2">
            How Do We Keep Your Business Secure Every Day, Every Hour?
          </h2>
          <h3 className="text-black/70">
            How do we work? Our D.I.A.M.O.N.D Framework!
          </h3>
          <p className="pt-4 text-sm lg:text-base leading-relaxed font-medium text-black/70">
            We don't believe in one time fixes. <br />
            At EyeQVault, we follow our D.I.A.M.O.N.D Framework - a continuous
            cycle that diagnoses risks, fixes vulnerabilities, builds resilient
            behaviours, and monitors constantly. This way, your business stays
            prepared for today's threats and tomorrow's.
          </p>
        </motion.div>
        <div className="flex flex-col pb-20 lg:pb-36">
          <div className="common-container !py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start ">
            {steps.slice(0, 4).map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-500 cursor-pointer min-h-full flex flex-col ${
                  index === 0 || index === 3 ? "lg:mt-12" : "lg:mt-0"
                } hover:scale-100 group ${
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
                <motion.div
                  className="h-1 rounded-lg bg-blue-900 mt-1"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeStep === index ? `${progress}%` : "0%",
                  }}
                  transition={{
                    ease: "linear",
                  }}
                ></motion.div>
                <p className="pt-4 text-sm text-gray-800">{step.description}</p>
                {step.actions && (
                  <ul
                    className={`list-disc pl-6 mt-4 space-y-2 text-sm text-gray-800 group-hover:opacity-100 transition-all duration-200 ease-in-out ${
                      activeStep !== index
                        ? "opacity-100 lg:opacity-0"
                        : "opacity-100"
                    } ${activeStep > 3 ? "hidden" : "block"}`}
                  >
                    {step.actions.map((action, actionIndex) => (
                      <li key={step.title + "-actions-" + actionIndex}>
                        {action}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {/* Diamond steps */}
          <div className="flex w-full justify-center items-center mt-6 mb-10 relative group overflow-hidden px-4">
            <img
              src={Lines2}
              alt="Decorative lines for D.I.A.M.O.N.D Framework"
              className="hidden lg:block lg:absolute -left-2 top-0 z-10 group-hover:-left-6 transition-all duration-200 ease-in-out"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="z-20"
            >
              <img
                src={DiamondSVG}
                loading="lazy"
                alt="D.I.A.M.O.N.D Framework"
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* <div className="relative z-10">
              <DiamondSteps activeStep={activeStep + 1} />
            </div> */}
            <img
              src={Lines1}
              alt="D.I.A.M.O.N.D Framework"
              className="hidden lg:block lg:absolute -right-2 bottom-15  z-10 group-hover:-right-6 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-start common-container !py-0">
            {steps.slice(4).map((step, index) => (
              <div
                key={index + 4}
                ref={(el) => (stepRefs.current[index + 4] = el)}
                className={`transition-all duration-50 ${
                  index === 0 || index === 2 ? "lg:-mt-12" : "mt-0"
                } cursor-pointer min-h-full flex flex-col ${
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
                <motion.div
                  className="h-1 rounded-lg bg-blue-900 mt-1"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeStep === index + 4 ? `${progress}%` : "0%",
                  }}
                  transition={{
                    ease: "linear",
                  }}
                ></motion.div>
                <p className="pt-4 text-sm text-gray-800">{step.description}</p>
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
        </div>
      </div>
    </section>
  );
};

export default SecurityMethods;
