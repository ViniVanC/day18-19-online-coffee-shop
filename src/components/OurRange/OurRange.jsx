import React from "react";
import { ourRangesCards } from "../../db";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { OurRangeCard } from "./OurRangeCard";

export const OurRange = () => {
  return (
    <section id="our-range">
      <Container>
        <div className="decor-cup hidden">
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
        <div className="flex flex-wrap justify-center gap-[30px]">
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
