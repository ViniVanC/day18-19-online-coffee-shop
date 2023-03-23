import { motion } from "framer-motion";
import React from "react";
import { ourRangesCards } from "../../db";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { OurRangeCard } from "./OurRangeCard";

export const OurRange = () => {
  return (
    <section id="our-range" className="relative z-0">
      <Container>
        <motion.div
          className="decor-cup absolute left-[45px] top-0 -z-[1] max-sm:hidden"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src="/images/decorate/decorate-coffee-cup.png"
            alt="decorate coffee cup"
          />
        </motion.div>

        <SectionHeader
          title={"Explore Our Alowishus"}
          description={
            "A drink from the 'My Alowishus' bottled brews range OR grab one of our delicious coffee's."
          }
        />
        <div className="flex justify-center gap-[30px] max-md:flex-wrap">
          {ourRangesCards.map(({ title, description, btnText, imgSrc }, i) => (
            <OurRangeCard
              key={i}
              title={title}
              description={description}
              btnText={btnText}
              imgSrc={imgSrc}
              delay={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
