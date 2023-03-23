import { motion } from "framer-motion";
import React from "react";

export const SectionHeader = ({ title, description }) => {
  return (
    <div className="mx-auto mb-[90px] max-w-[720px] text-center">
      <motion.h2
        className="section-title mb-[25px]"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="paragraph"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {description}
      </motion.p>
    </div>
  );
};
