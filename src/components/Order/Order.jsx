import React from "react";
import { Container } from "../Container";

export const Order = () => {
  return (
    <section id="order">
      <Container>
        <div className="flex items-center justify-center">
          <img
            className="w-full max-w-[700px]"
            src="/images/decorate/decorate-coffee-cups.png"
            alt="decorate coffee cups"
          />
          <div className="w-full max-w-[512px]">
            <h2 className="section-title mb-[30px]">
              Order Your Favourite Coffee
            </h2>
            <p className="paragraph mb-[60px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="btn">Order Now</button>
          </div>
        </div>
      </Container>
    </section>
  );
};
