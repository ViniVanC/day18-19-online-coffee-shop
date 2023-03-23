import { motion } from "framer-motion";
import React from "react";

export const ReviewsCard = ({ imgSrc, title, description, stars, delay }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-[16px] bg-white sm:max-w-[460px]"
      style={{
        filter: "drop-shadow(0px 20px 60px rgba(163, 168, 179, 0.15))",
      }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: `.${delay + 1}`, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img src={imgSrc} alt={`${title}-img`} />
      <div className="p-[40px]">
        <div className="mb-[32px] flex items-center gap-[16px]">
          <h3 className="text-[24px] font-semibold leading-[125%] text-black">
            {title}
          </h3>
          <ul className="flex items-center gap-[3px]">
            {new Array(stars).fill().map((item, i) => (
              <li key={i}>
                <img src="/images/icons/star.svg" alt="star" />
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[20px] leading-[150%] text-black">"{description}"</p>
      </div>
    </motion.div>
  );
};
