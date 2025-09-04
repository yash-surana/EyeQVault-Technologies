import React from "react";
import { motion } from "framer-motion";
import ConnectedSoftware from "/src/assets/illustrations/connected-software.svg";
import { 
  titleVariants, 
  itemVariants, 
  containerVariants,
  imageHoverVariants,
  cardHoverVariants 
} from "../utils/animationVariants";

const Services = ({ onContactClick }) => {
  const services = [
    {
      title: "Prevent Data Breaches",
      description:
        "Stop unauthorised access to your systems and third party apps with Network Security",
      image: ConnectedSoftware,
      rows: 2,
      cols: 2,
      id: "service-data-breaches",
    },
    {
      title: "Stop Malware & Phishing Attempts",
      description:
        "One wrong click shouldn't cost millions. Detect and neutralize ransomware, phishing, and malware with Malware Forensics.",
      image: ConnectedSoftware,
      rows: 1,
      cols: 1,
      id: "service-malware",
    },
    {
      title: "Protect Your Intellectual Property",
      description:
        "Your secrets should stay yours. Secure designs, contracts, and client data with Data Protection & Encryption.",
      image: ConnectedSoftware,
      rows: 1,
      cols: 1,
      id: "service-ip-protection",
    },
    {
      title: "Secure Old Devices",
      description:
        "Selling laptops or drives? Wipe them permanently with Data Sanitization - no sensitive data left behind.",
      image: ConnectedSoftware,
      rows: 1,
      cols: 2,
      id: "service-device-security",
    },
    {
      title: "Looking for insurance related or ISO or SEBI compliances ?",
      description:
        "We simplify compliance readiness so you stay secure and certified.",
      image: ConnectedSoftware,
      rows: 1,
      cols: 1,
      id: "service-compliance",
    },
    {
      title: "Recover From Cyber Attacks",
      description:
        "What's your plan if systems go dark? Bounce back quickly with Incident Response & Risk Management, including post-hack patching.",
      image: ConnectedSoftware,
      rows: 1,
      cols: 1,
      id: "service-recovery",
    },
    {
      title: "Detect Fraud & Insider Threats",
      description:
        "Who's really accessing your systems? Trace digital evidence and uncover suspicious activity with a deep Cyber Audit.",
      image: ConnectedSoftware,
      rows: 1,
      cols: 1,
      id: "service-fraud",
    },
  ];

  // Abstracted styles
  const baseCardStyles =
    "transition-all duration-300 group relative overflow-hidden border border-opacity-60 transition duration-300 ease-in-out border-neutral-700 rounded-2xl p-6 hover:border-gray-500";

  const verticalStyle = "flex flex-col justify-between gap-4 h-full";

  const largeImageContainerStyles =
    "w-full h-64 flex items-center justify-center relative";
  const smallImageContainerStyles =
    "aspect-square h-12 flex items-center justify-center relative";

  const descriptionStyles = "text-gray-300 text-sm leading-relaxed pt-2";

  return (
    <section
      className="bg-primary-black"
      aria-labelledby="services-heading"
      id="services-section"
    >
      <div className="common-container">
        <motion.div
          className="text-left mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <h2 id="services-heading" className="text-white mb-4">
            Every business works for growth
          </h2>
          <h3 className="text-white/80">
            One security risk can take it all away
          </h3>
        </motion.div>

        {/* Bento Grid Layout - Individual Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3 sm:gap-4 h-auto"
          role="list"
          aria-label="Security services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Card 0 - Large Card */}
          <motion.article
            className={`${baseCardStyles} sm:col-span-6 ${verticalStyle} row-span-2`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[0].id}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className={largeImageContainerStyles}>
              <div className="">
                <motion.img
                  src={services[0].image}
                  alt={`Illustration for ${services[0].title} service`}
                  loading="lazy"
                  width="200"
                  height="200"
                  whileHover="hover"
                  variants={imageHoverVariants}
                />
              </div>
            </div>
            <div>
              <h4 id={services[0].id}>{services[0].title}</h4>
              <p className={descriptionStyles}>{services[0].description}</p>
            </div>
          </motion.article>

          {/* Card 1 */}
          <motion.article
            className={`${baseCardStyles} ${verticalStyle} sm:col-span-3 lg:col-span-3`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[1].id}
            variants={itemVariants}
            whileHover="hover"
          >
            <div>
              <h4 id={services[1].id}>{services[1].title}</h4>
              <p className={descriptionStyles}>{services[1].description}</p>
            </div>
            <div className={"h-20 "}>
              <motion.img
                src={services[1].image}
                alt={`Illustration for ${services[1].title} service`}
                className="w-full h-full"
                loading="lazy"
                width="80"
                height="80"
                whileHover="hover"
                variants={imageHoverVariants}
              />
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            className={`${baseCardStyles} ${verticalStyle} sm:col-span-3 lg:col-span-3`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[2].id}
            variants={itemVariants}
            whileHover="hover"
          >
            <div>
              <h4 id={services[2].id}>{services[2].title}</h4>
              <p className={descriptionStyles}>{services[2].description}</p>
            </div>
            <div className={"h-20 "}>
              <motion.img
                src={services[2].image}
                alt={`Illustration for ${services[2].title} service`}
                className="w-full h-full"
                loading="lazy"
                width="80"
                height="80"
                whileHover="hover"
                variants={imageHoverVariants}
              />
            </div>
          </motion.article>

          {/* Card 3 - Wide Card */}
          <motion.article
            className={`${baseCardStyles} sm:col-span-6 lg:col-span-6 flex flex-col sm:flex-row gap-x-8 gap-y-4 items-center pr-0`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[3].id}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex flex-col justify-end pt-auto mt-auto">
              <h4 id={services[3].id}>{services[3].title}</h4>
              <p className={descriptionStyles}>{services[3].description}</p>
            </div>
            <div className={"h-full"}>
              <motion.img
                src={services[3].image}
                alt={`Illustration for ${services[3].title} service`}
                className="w-full h-full"
                loading="lazy"
                width="120"
                height="120"
                whileHover="hover"
                variants={imageHoverVariants}
              />
            </div>
          </motion.article>

          {/* Cards 4-6 (Last row) */}
          {services.slice(4).map((service, index) => (
            <motion.article
              key={service.id}
              className={`${baseCardStyles} ${verticalStyle} sm:col-span-4 lg:col-span-4`}
              tabIndex="0"
              role="listitem"
              aria-labelledby={service.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className={smallImageContainerStyles}>
                <motion.img
                  src={service.image}
                  alt={`Illustration for ${service.title} service`}
                  className="w-full h-full"
                  loading="lazy"
                  width="48"
                  height="48"
                  whileHover="hover"
                  variants={imageHoverVariants}
                />
              </div>
              <div>
                <h4 id={service.id}>{service.title}</h4>
                <p className={descriptionStyles}>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
