import { motion } from "framer-motion";
import React from "react";

export const OurRangeCard = ({
  title,
  description,
  btnText,
  imgSrc,
  delay,
}) => {
  return (
    <motion.div
      className="rounded-[24px] bg-white p-[40px] sm:w-1/3"
      style={{
        boxShadow: "0px 30px 60px rgba(163, 168, 179, 0.3)",
      }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: `.${delay + 1}`, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h3 className="mb-2 text-[36px] font-semibold leading-[144%] text-black">
        {title}
      </h3>
      <p className="paragraph">{description}</p>
      <img className="my-[60px] mx-auto" src={imgSrc} alt="icon" />
      <button className="btn mx-auto">{btnText}</button>
    </motion.div>
  );
};
