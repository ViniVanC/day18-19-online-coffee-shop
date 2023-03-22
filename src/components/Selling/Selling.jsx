import React from "react";
import { sellingCards } from "../../db";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { SellingCard } from "./SellingCard";

export const Selling = () => {
  return (
    <section id="selling">
      <Container>
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
