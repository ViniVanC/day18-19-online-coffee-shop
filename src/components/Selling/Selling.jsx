import { motion } from "framer-motion";
import React from "react";
import { sellingCards } from "../../db";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { SellingCard } from "./SellingCard";

export const Selling = () => {
  return (
    <section id="selling" className="relative z-0">
      <Container>
        <motion.div
          className="absolute -top-[100px] -right-[0] z-[-1] w-[400px] scale-x-[-1] max-sm:hidden"
          style={{
            filter:
              "blur(7.5px) drop-shadow(-15px 50px 70px rgba(27, 27, 29, 0.1))",
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <img
            className="w-full object-contain"
            src="/images/decorate/decorate-coffee-cup.png"
            alt="decorate coffee cup"
          />
        </motion.div>
        <SectionHeader
          title={"Best Selling Coffee"}
          description={
            "A drink from the 'My Alowishus' bottled brews range OR grab one of our delicious coffee's."
          }
        />
        <div className="mt-[180px] flex justify-center gap-[30px] max-md:flex-wrap">
          {sellingCards.map(({ title, description, price, imgSrc }, i) => (
            <SellingCard
              key={i}
              num={i}
              title={title}
              description={description}
              price={price}
              imgSrc={imgSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
