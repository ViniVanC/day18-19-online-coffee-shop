import { motion } from "framer-motion";
import React from "react";
import { Container } from "../Container";

export const Order = () => {
  return (
    <section id="order">
      <Container>
        <div className="flex items-center justify-center">
          <motion.img
            className="w-full max-w-[700px]"
            src="/images/decorate/decorate-coffee-cups.png"
            alt="decorate coffee cups"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          />
          <div className="w-full max-w-[512px]">
            <motion.h2
              className="section-title mb-[30px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Order Your Favourite Coffee
            </motion.h2>
            <motion.p
              className="paragraph mb-[60px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </motion.p>
            <motion.button
              className="btn"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
};
