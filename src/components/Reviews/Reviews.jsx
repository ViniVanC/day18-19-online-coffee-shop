import React from "react";
import { reviewsCards } from "../../db";
import { Container } from "../Container";
import { ReviewsCard } from "./ReviewsCard";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";

export const Reviews = () => {
  return (
    <section id="reviews" className="relative z-0">
      <motion.div
        className="absolute -top-[100px] -left-[545px] z-[-1] -rotate-[25deg] -scale-x-[1] max-sm:hidden"
        style={{
          filter:
            "blur(3px) drop-shadow(-15px 50px 70px rgba(27, 27, 29, 0.1))",
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
          src="/images/decorate/decorate-coffee-cups.png"
          alt="decorate coffee cups"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 -right-[600px] z-[-1] rotate-0 max-sm:hidden"
        style={{
          filter: " drop-shadow(-15px 50px 70px rgba(27, 27, 29, 0.1))",
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <img
          className="w-full object-contain"
          src="/images/decorate/decorate-coffee-cups.png"
          alt="decorate coffee cups"
        />
      </motion.div>

      <Container>
        <div className="absolute top-0 left-0 z-[1] h-full w-full max-w-[545px] rounded-3xl  p-[30px] backdrop-blur-[20px]">
          <motion.h2
            className="section-title mb-[40px]"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div
            className="relative mb-[90px] pl-[90px]"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[40px] font-semibold leading-[100%] caret-black">
              4.9
            </span>
            <ul className="mb-[8px] flex items-center gap-[3px]">
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
          </motion.div>
          <motion.div
            className="flex items-center gap-[25px]"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
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
          </motion.div>
        </div>
      </Container>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={35}
        centeredSlides={true}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        pagination={{ clickable: true }}
        className={"relative z-0"}
      >
        {reviewsCards.map(({ title, description, stars, imgSrc }, i) => (
          <SwiperSlide key={i}>
            <ReviewsCard
              title={title}
              description={description}
              stars={stars}
              imgSrc={imgSrc}
              delay={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
