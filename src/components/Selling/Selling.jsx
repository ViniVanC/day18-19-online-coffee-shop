import React from "react";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";

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
        <div className=""></div>
      </Container>
    </section>
  );
};
