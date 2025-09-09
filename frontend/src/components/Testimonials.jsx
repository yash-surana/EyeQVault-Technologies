import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  backgroundVariants,
  titleVariants,
} from "../utils/animationVariants";

const array = [
  {
    body: "With EyeQVault, we've seen a 50% reduction in false positive alerts, allowing our analysts to focus on real threats and <strong>eliminating false mental pressure</strong>. This has significantly cut down our mean time to resolution, making our entire security posture smarter and more effective.",
    name: "Bhavesh Kumar",
    company: "SK Finance",
    position: "CSO",
    rating: 5,
  },
  {
    body: "EyeQVault simplified our security. Their platform integrated seamlessly with our existing systems, giving us a unified view. Their team is top-notch - true professionals who are now an <strong>extension of our own security operations center.</strong>",
    name: "Rahul Agarwal",
    company: "Ideal Insurance",
    position: "MD",
    rating: 5,
  },
  {
    body: "Before EyeQVault, our board was very vigilant about our cybersecurity and its potential effect on company reputation. EyeQVault didn't just sell us a product; they provided a comprehensive solution that <strong>gave us peace of mind</strong>. Our operations and IP are now secure, and we can focus on what we do best-growing our business.",
    name: "Ravi Goenka",
    company: "Laxmi Organic Limited",
    position: "Chairman",
    rating: 5,
  },
  {
    body: "EyeQVault's real-time threat intelligence and proactive threat hunting helped us anticipate and <strong>neutralize threats to our online sales portal</strong> before they caused damage.</strong> We were also able to <strong>protect our sales data from competitors.</strong>",
    name: "Kul Taneja",
    company: "Pratap & Sons",
    position: "MD",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-primary-black">
      {/* Subtle atmospheric glow effect */}
      <motion.div
        className="absolute top-10 right-0 w-full h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(245deg, rgba(40, 40, 40, 0.6) 0%, rgba(30, 30, 30, 0.3) 70%, transparent 70%)",
          filter: "blur(60px)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={backgroundVariants}
      />
      <motion.div
        className="absolute top-20 right-0 w-96 h-96  pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(50, 50, 50, 0.4) 0%,  transparent 80%)",
          filter: "blur(80px)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={backgroundVariants}
      />

      <div className="common-container mx-auto w-full">
        <motion.div
          className="text-center lg:max-w-6xl mb-8 lg:mb-16 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2 className="text-white mb-4 " variants={titleVariants}>
            Don't just take our word for it.
          </motion.h2>
          <motion.h3 className="text-white/70 text-h2" variants={titleVariants}>
            The biggest companies <br className="lg:hidden" /> trust us.
          </motion.h3>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 place-items-center pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {array.map((item) => (
            <div
              key={item.name}
              className=" p-8 rounded-lg h-full shadow-lg border border-gray-600 hover:border-gray-300 transition-all duration-300 ease-in-out flex flex-col justify-between items-start gap-4 hover:brightness-110"
              style={{
                background: "linear-gradient(-45deg, #21323A 24%, #181F23 96%)",
              }}
            >
              <p
                className="text-base lg:lg  text-white/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
              <div className="flex items-center justify-between gap-4 mt-2 w-full">
                <div className="">
                  <p className="text-white/90 font-medium text-sm">
                    {item.name}
                  </p>
                  <p className="text-white/90 text-sm">
                    <span className="text-white/50">
                      {item.position || "Leader"}
                    </span>{" "}
                    of {item.company}
                  </p>
                </div>

                {/* Rating */}
                <div className="rounded-2xl border border-gray-600 py-1 px-2 flex">
                  {[...Array(item.rating || 5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className="w-4 h-4 text-[#3F98A7] fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
