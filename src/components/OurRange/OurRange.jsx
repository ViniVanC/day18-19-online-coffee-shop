import React from "react";
import { ourRangesCards } from "../../db";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { OurRangeCard } from "./OurRangeCard";

export const OurRange = () => {
  return (
    <section id="our-range" className="relative z-0">
      <Container>
        <div className="decor-cup absolute left-[45px] top-0 -z-[1] max-sm:hidden">
          <img
            src="/images/decorate/decorate-coffee-cup.png"
            alt="decorate coffee cup"
          />
        </div>

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
