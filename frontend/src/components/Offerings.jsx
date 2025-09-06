import React, { useState } from "react";
import AIImage from "../assets/illustrations/ai.png";
import SecurityNetwork from "../assets/illustrations/security-network.svg";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  titleVariants,
  cardHoverVariants,
  imageHoverVariants,
  imageCardHoverVariants,
} from "../utils/animationVariants";

const Offerings = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "For Managing Directors",
      heading: "The Digital Peace of Mind Program",
      subheading: "For Managing Directors & Boards who want clarity and calm",
      exclusivity: "Exclusive monthly intake - by invitation only.",
      features: [
        {
          title: "Boardroom Risk Report (Direct Strategy)",
          description:
            "A clear, jargon-free snapshot of your company's biggest digital risks and what they mean in business terms.",
        },
        {
          title: "Cyber Insurance Advantage",
          description:
            "We prepare your enterprise to qualify for lower cyber insurance premiums — translating to direct cost savings.",
        },
        {
          title: "Executive Breach Drill",
          description:
            "A controlled breach simulation for your leadership team, so everyone knows what to do and confidence replaces panic.",
        },
      ],
      cta: "Request an Invitation",
      smallText: "Limited executive seats each month",
      image: AIImage,
    },
    {
      id: 2,
      title: "For Chief Security Officers",
      heading: "The Cyber Command Program",
      subheading:
        "For Chief Security Officers who want deeper visibility and control",
      exclusivity: "Offered to a select few enterprises per month.",
      features: [
        {
          title: "Advanced Threat Simulation",
          description:
            "A red-team style attack run safely for 7 days to expose blind spots before attackers do.",
        },
        {
          title: "24/7 Threat Monitoring Trial",
          description:
            "Real-time coverage by live analysts plus dashboards, for 30 days of round-the-clock confidence.",
        },
        {
          title: "Regulatory Compliance Heatmap",
          description:
            "A custom report highlighting where you'd fail an audit today — and what to fix first.",
        },
        {
          title: "Incident Response Fast-Track",
          description:
            "If an incident occurs during the trial, you receive a forensic report within 48 hours and a free containment plan.",
        },
      ],
      cta: "Talk to Our Cyber Expert Now",
      smallText: "Strict monthly capacity to ensure quality",
      image: SecurityNetwork,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary-black">
      <div className="common-container !pt-20">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-row gap-4 bg-secondary-gray/50 p-2 rounded-lg mb-4"
            variants={itemVariants}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 cursor-pointer text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
                aria-selected={activeTab === tab.id}
                role="tab"
                aria-controls={`tab-panel-${tab.id}`}
                id={`tab-${tab.id}`}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {tab.title}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            id={`tab-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
            initial={{ opacity: 0 }}
            animate={activeTab === tab.id ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className=""
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {tab.heading}
            </motion.h2>
            <motion.div
              className="border-l-6 bg-secondary-gray/20 border-[#145cb7] px-4 py-3 rounded-lg mt-6 mb-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg lg:text-xl mb-2 text-white">
                {tab.subheading}
              </p>
              <p className="text-base lg:text-lg font-normal text-white/70">
                {tab.exclusivity}
              </p>
            </motion.div>
            <motion.div
              className={`flex flex-col lg:flex-row gap-8 lg:gap-24 lg:px-4`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex-1" variants={itemVariants}>
                <motion.h4 className="mb-6" variants={titleVariants}>
                  What's included:
                </motion.h4>
                <motion.ul
                  className="space-y-6 mb-8"
                  variants={containerVariants}
                >
                  {tab.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex flex-col hover:pl-4 transition-all duration-300 ease-in-out"
                      variants={itemVariants}
                      whileHover={cardHoverVariants.hover}
                    >
                      <span className="font-semibold text-lg">
                        {feature.title}
                      </span>
                      <span className="text-primary-gray">
                        {feature.description}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.button
                  className="btn-primary mb-3"
                  onClick={() => onContactClick(tab.title)}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.cta}
                </motion.button>
                <motion.p
                  className="text-sm font-medium text-white/70 italic"
                  variants={itemVariants}
                >
                  {tab.smallText}
                </motion.p>
              </motion.div>

              <motion.div
                className="flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="w-full max-w-md aspect-square bg-black rounded-lg flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={tab.image}
                    alt={tab.title}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={imageCardHoverVariants.hover}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
