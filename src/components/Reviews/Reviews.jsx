import React from "react";
import { reviewsCards } from "../../db";
import { Container } from "../Container";
import { ReviewsCard } from "./ReviewsCard";

export const Reviews = () => {
  return (
    <section id="reviews" className="relative z-0">
      <div
        className="absolute -top-[100px] -left-[545px] z-[-1] -rotate-[25deg] -scale-x-[1] max-sm:hidden"
        style={{
          filter:
            "blur(3px) drop-shadow(-15px 50px 70px rgba(27, 27, 29, 0.1))",
        }}
      >
        <img
          className="w-full object-contain"
          src="/images/decorate/decorate-coffee-cups.png"
          alt="decorate coffee cups"
        />
      </div>
      {reviewsCards.map(({ title, description, stars, imgSrc }, i) => (
        <ReviewsCard
          key={i}
          title={title}
          description={description}
          stars={stars}
          imgSrc={imgSrc}
          delay={i}
        />
      ))}
      <Container>
        <div className="relative h-[650px] w-full">
          <div className="absolute top-0 right-0 w-full max-w-[545px] rounded-3xl bg-lightGray p-[30px] backdrop-blur-[10px]">
            <h2 className="section-title mb-[40px]">What Our Customers Say</h2>
            <div className="relative mb-[90px] pl-[90px]">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[40px] font-semibold leading-[100%] caret-black">
                4.9
              </span>
              <ul className="mb-[8px] flex items-center">
                <li>
                  <img src="/images/icons/star.svg" alt="star" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="star" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="star" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="star" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="star" />
                </li>
              </ul>
              <p className="paragraph">based on 2452+ reviews</p>
            </div>
            <div className="flex items-center gap-[25px]">
              <button
                id="prevBtn"
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition duration-300 active:scale-95 sm:hover:scale-105"
                style={{
                  boxShadow: "0px 12px 30px rgba(205, 209, 214, 0.28)",
                }}
              >
                <img
                  className="scale-x-[-1]"
                  src="/images/icons/arrow.svg"
                  alt="arrow-prevBtn"
                />
              </button>
              <button
                id="nextBtn"
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white transition duration-300 active:scale-95 sm:hover:scale-105"
                style={{
                  boxShadow: "0px 12px 30px rgba(205, 209, 214, 0.28)",
                }}
              >
                <img src="/images/icons/arrow.svg" alt="arrow-nextBtn" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
