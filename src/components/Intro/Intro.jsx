import React from "react";
import { Container } from "../Container";

export const Intro = () => {
  return (
    <div id="intro" className="bg-gray">
      <Container>
        <div className="flex h-[100vh] items-center py-[130px]">
          {/* left */}
          <div className="relative z-0 max-w-[600px]">
            {/* title */}
            <h2 className="mb-[30px] text-[124px] font-extrabold leading-[113%] text-black">
              Alowishus <br /> Delicious <br /> Coffee
              <span className="ml-[30px] inline-block h-[58px] w-[73px]">
                <img
                  className="w-full object-contain"
                  src="/images/intro/coffee-license.png"
                  alt="coffee license"
                />
              </span>
            </h2>
            {/* description */}
            <p className="paragraph mb-[60px]">
              A drink from the 'My Alowishus' bottled brews <br /> range OR grab
              one of our delicious coffee's.
            </p>
            {/* buttons box */}
            <div className="flex items-center gap-[30px]">
              <button className="btn px-[40px] py-[20px]">Download App</button>
              <a
                className="relative text-[18px] uppercase leading-[144%] text-black transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:rounded-md after:bg-black after:transition-all after:duration-300 active:scale-95 sm:hover:after:w-0"
                href="#"
              >
                shop coffee
              </a>
            </div>
          </div>
          {/* right */}
          <div className="relative -z-[0] h-[712px] w-full max-w-[700px]">
            <img
              className="absolute top-1/2 left-1/2 z-[1] w-full -translate-y-1/2 -translate-x-1/2 object-contain"
              src="/images/intro/coffee-cup.png"
              alt="coffee cup"
            />
            <img
              className="absolute right-[30px] top-[30px] z-[2]"
              src="/images/intro/coffee-license.png"
              alt="coffee license"
            />
            <img
              className="absolute left-[45px] top-[390px] z-[3]"
              src="/images/intro/comment.png"
              alt="comment"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
