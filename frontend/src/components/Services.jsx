import { motion } from "framer-motion";
import Icon1 from "../assets/illustrations/icon 1-min.svg";
import Icon2 from "../assets/illustrations/icon 2-min.svg";
import Icon3 from "../assets/illustrations/icon 3-min.svg";
import Icon4 from "../assets/illustrations/icon 4-min.svg";
import Icon5 from "../assets/illustrations/icon 5-min.svg";
import Icon6 from "../assets/illustrations/icon 6-min.svg";
import Icon7 from "../assets/illustrations/icon 7-min.svg";
import Icon8 from "../assets/illustrations/icon 8-min.svg";

import {
  titleVariants,
  containerVariants,
  imageCardHoverVariants,
} from "../utils/animationVariants";

const Services = () => {
  const services = [
    {
      title: "Prevent Data Breaches",
      description:
        "Stop unauthorised access to your systems and third party apps with Network Security",
      image: Icon1,
      rows: 2,
      cols: 2,
      id: "service-data-breaches",
    },
    {
      title: "Stop Malware & Phishing Attempts",
      description:
        "One wrong click shouldn't cost millions. Detect and neutralize ransomware, phishing, and malware with Malware Forensics.",
      image: Icon6,
      rows: 1,
      cols: 1,
      id: "service-malware",
    },
    {
      title: "Protect Your Intellectual Property",
      description:
        "Your secrets should stay yours. Secure designs, contracts, and client data with Data Protection & Encryption.",
      image: Icon3,
      rows: 1,
      cols: 1,
      id: "service-ip-protection",
    },
    {
      title: "Secure Old Devices",
      description:
        "Selling laptops or drives? Wipe them permanently with Data Sanitization - no sensitive data left behind.",
      image: Icon2,
      rows: 1,
      cols: 2,
      id: "service-device-security",
    },
    {
      title: "Looking for insurance related or ISO or SEBI compliances ?",
      description:
        "We simplify compliance readiness so you stay secure and certified.",
      images: [Icon7, Icon8],
      rows: 1,
      cols: 1,
      id: "service-compliance",
    },
    {
      title: "Recover From Cyber Attacks",
      description:
        "What's your plan if systems go dark? Bounce back quickly with Incident Response & Risk Management, including post-hack patching.",
      image: Icon5,
      rows: 1,
      cols: 1,
      id: "service-recovery",
    },
    {
      title: "Detect Fraud & Insider Threats",
      description:
        "Who's really accessing your systems? Trace digital evidence and uncover suspicious activity with a deep Cyber Audit.",
      image: Icon4,
      rows: 1,
      cols: 1,
      id: "service-fraud",
    },
  ];

  // Abstracted styles
  const baseCardStyles =
    "transition-all duration-300 group relative overflow-hidden border border-opacity-60 transition duration-300 ease-in-out border-neutral-700 rounded-2xl p-6 hover:border-gray-500 hover:shadow-md hover:shadow-white/10";

  const verticalStyle = "flex flex-col justify-between gap-4 h-full";

  const descriptionStyles = "text-gray-300 text-sm leading-relaxed pt-2";

  const CardText = ({ title, description }) => {
    return (
      <div>
        <h4>{title}</h4>
        <p className={descriptionStyles}>{description}</p>
      </div>
    );
  };
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 h-auto w-full"
          role="list"
          aria-label="Security services"
          initial="hidden"
          whileInView="visible"
        >
          <motion.article
            className={`${baseCardStyles} ${verticalStyle} `}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[0].id}
            whileHover="hoverWithMovement"
            initial="initial"
            animate="initial"
          >
            <div className="h-[75%] w-full">
              <motion.img
                src={services[0].image}
                alt={`Illustration for ${services[0].title} service`}
                loading="lazy"
                width="200"
                height="200"
                className="w-[75%] h-full m-auto"
                variants={imageCardHoverVariants}
              />
            </div>
            <CardText
              title={services[0].title}
              description={services[0].description}
            />
          </motion.article>

          {/* Card 1,2,3 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 h-auto">
              {/* Card 1 */}
              <motion.article
                className={`${baseCardStyles} ${verticalStyle}`}
                tabIndex="0"
                role="listitem"
                aria-labelledby={services[1].id}
                whileHover="hoverWithMovement"
                initial="initial"
              >
                <CardText
                  title={services[1].title}
                  description={services[1].description}
                />
                <div className={"h-30 w-full mx-auto"}>
                  <motion.img
                    src={services[1].image}
                    alt={`Illustration for ${services[1].title} service`}
                    className="w-[80%] mx-auto h-full"
                    loading="lazy"
                    width="40"
                    height="40"
                    variants={imageCardHoverVariants}
                  />
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                className={`${baseCardStyles} ${verticalStyle}`}
                tabIndex="0"
                role="listitem"
                aria-labelledby={services[2].id}
                whileHover="hoverWithMovement"
                initial="initial"
              >
                <CardText
                  title={services[2].title}
                  description={services[2].description}
                />
                <div className={"h-30 w-30 mx-auto"}>
                  <motion.img
                    src={services[2].image}
                    alt={`Illustration for ${services[2].title} service`}
                    className="w-full h-full"
                    loading="lazy"
                    width="40"
                    height="40"
                    variants={imageCardHoverVariants}
                  />
                </div>
              </motion.article>
            </div>
            {/* Card 3 - Wide Card */}
            <motion.article
              className={`${baseCardStyles} !p-0 flex flex-col sm:flex-row gap-4 items-center pr-0 h-full`}
              tabIndex="0"
              role="listitem"
              aria-labelledby={services[3].id}
              whileHover="hover"
              initial="initial"
            >
              <div className="flex flex-col justify-end pt-auto mt-auto p-6 w-1/2">
                <h4 id={services[3].id}>{services[3].title}</h4>
                <p className={descriptionStyles}>{services[3].description}</p>
              </div>
              <div className={"h-full w-1/2 -mr-4"}>
                <motion.img
                  src={services[3].image}
                  alt={`Illustration for ${services[3].title} service`}
                  className="h-full w-full"
                  loading="lazy"
                  width="120"
                  height="120"
                  variants={imageCardHoverVariants}
                />
              </div>
            </motion.article>
          </div>
        </motion.div>

        {/* Cards 4-6 (Last row) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 h-auto w-full pt-3 sm:pt-4"
          role="list"
          aria-label="Security services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.article
            key={services[4].id}
            className={`${baseCardStyles} ${verticalStyle} group`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[4].id}
            whileHover="hoverWithMovement"
            initial="initial"
          >
            <div
              className={
                "h-24 w-full mx-auto relative flex flex-row justify-center items-center gap-8"
              }
            >
              <motion.div className="h-full">
                <motion.img
                  src={services[4].images[0]}
                  alt={`Illustration for ${services[4].title} service`}
                  className="bg-[#1e6aff] h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  loading="lazy"
                  width="100"
                  height="100"
                  variants={imageCardHoverVariants}
                />
              </motion.div>
              <motion.div
                className="bg-[#1e6aff] h-full overflow-hidden"
                variants={imageCardHoverVariants}
              >
                <motion.img
                  src={services[4].images[1]}
                  alt={`Illustration for ${services[4].title} service`}
                  className="h-full scale-x-125 bg-[#1e6aff]"
                  style={{ transformStyle: "preserve-3d" }}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </motion.div>
            </div>
            <CardText
              title={services[4].title}
              description={services[4].description}
            />
          </motion.article>
          <motion.article
            key={services[5].id}
            className={`${baseCardStyles} ${verticalStyle}`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[5].id}
            whileHover="hoverWithMovement"
            initial="initial"
          >
            <div
              className={
                "h-30 w-full mx-auto relative flex flex-row justify-center items-center "
              }
            >
              <motion.img
                src={services[5].image}
                alt={`Illustration for ${services[5].title} service`}
                className="w-[70%] mx-auto h-full "
                style={{ transformStyle: "preserve-3d" }}
                loading="lazy"
                width="80"
                height="80"
                variants={imageCardHoverVariants}
              />
            </div>
            <CardText
              title={services[5].title}
              description={services[5].description}
            />
          </motion.article>
          <motion.article
            key={services[6].id}
            className={`${baseCardStyles} ${verticalStyle}`}
            tabIndex="0"
            role="listitem"
            aria-labelledby={services[6].id}
            whileHover="hoverWithMovement"
            initial="initial"
          >
            <div
              className={
                "h-30 w-full mx-auto relative flex flex-row  justify-center items-center "
              }
            >
              <motion.img
                src={services[6].image}
                alt={`Illustration for ${services[6].title} service`}
                className="w-full h-full" // Remove scale-110 if present
                style={{ transformStyle: "preserve-3d" }}
                loading="lazy"
                width="80"
                height="80"
                variants={imageCardHoverVariants}
              />
            </div>
            <CardText
              title={services[6].title}
              description={services[6].description}
            />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
