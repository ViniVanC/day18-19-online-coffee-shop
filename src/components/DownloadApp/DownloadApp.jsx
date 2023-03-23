import React from "react";
import { Container } from "../Container";

export const DownloadApp = () => {
  return (
    <section id="download-app" className="relative z-0">
      <div className="absolute -top-[100px] -left-[545px] z-[-1] rotate-[25deg] max-sm:hidden">
        <img
          className="w-full object-contain"
          src="/images/decorate/decorate-coffee-cups.png"
          alt="decorate coffee cups"
        />
      </div>

      <Container>
        <div className="flex items-center justify-between max-sm:justify-center">
          <div className="w-full max-w-[512px]">
            <h2 className="section-title mb-[30px]">
              Instant Coffee At Your Home
            </h2>
            <p className="paragraph mb-[60px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </p>
            <button className="btn">Download our app</button>
          </div>
          <div className="relative z-0 h-[730px] w-full max-w-[600px]">
            <img
              className="absolute top-1/2 left-1/2 z-[-1] -translate-y-1/2 -translate-x-1/2"
              src="/images/section-download-app/ellipse.png"
              alt="ellipse bg"
            />
            <img
              className="absolute top-0 left-1/4 z-[1]  origin-bottom -rotate-[15deg]"
              src="/images/section-download-app/mobile.png"
              alt="mobile app img"
              style={{
                filter: "drop-shadow(0px 45px 80px rgba(175, 183, 190, 0.21))",
              }}
            />
            <img
              className="absolute top-0 left-1/4 z-[2]"
              src="/images/section-download-app/mobile.png"
              alt="mobile app img"
              style={{
                filter: "drop-shadow(0px 45px 80px rgba(175, 183, 190, 0.21))",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
