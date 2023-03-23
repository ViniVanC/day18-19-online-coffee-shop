import { motion } from "framer-motion";
import React from "react";
import { Container } from "../Container";

export const Intro = () => {
  return (
    <div id="intro" className="bg-gray">
      <Container>
        <div className="flex h-[100vh] items-center py-[130px]">
          {/* left */}
          <div className="relative z-0 max-w-[600px]">
            {/* title */}
            <motion.h2
              className="mb-[30px] text-[124px] font-extrabold leading-[113%] text-black"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Alowishus <br /> Delicious <br /> Coffee
              <motion.span
                className="ml-[30px] inline-block h-[58px] w-[73px]"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <img
                  className="w-full object-contain"
                  src="/images/intro/coffee-license.png"
                  alt="coffee license"
                />
              </motion.span>
            </motion.h2>
            {/* description */}
            <motion.p
              className="paragraph mb-[60px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              A drink from the 'My Alowishus' bottled brews <br /> range OR grab
              one of our delicious coffee's.
            </motion.p>
            {/* buttons box */}
            <motion.div
              className="flex items-center gap-[30px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <button className="btn px-[40px] py-[20px]">Download App</button>
              <a
                className="relative text-[18px] uppercase leading-[144%] text-black transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:rounded-md after:bg-black after:transition-all after:duration-300 active:scale-95 sm:hover:after:w-0"
                href="#"
              >
                shop coffee
              </a>
            </motion.div>
          </div>
          {/* right */}
          <div className="relative -z-[0] h-[712px] w-full max-w-[700px]">
            <motion.img
              className="absolute top-1/2 left-1/2 z-[1] w-full -translate-y-1/2 -translate-x-1/2 object-contain"
              src="/images/intro/coffee-cup.png"
              alt="coffee cup"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            />
            <motion.img
              className="absolute right-[30px] top-[30px] z-[2]"
              src="/images/intro/coffee-license.png"
              alt="coffee license"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            />
            <motion.img
              className="absolute left-[45px] top-[390px] z-[3]"
              src="/images/intro/comment.png"
              alt="comment"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
