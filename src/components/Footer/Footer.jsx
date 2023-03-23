import React from "react";
import { Container } from "../Container";

export const Footer = () => {
  const title =
    "mb-[30px] text-[40px] font-extrabold leading-[125%] text-black";
  const icon =
    "flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-lg sm:hover:scale-110 active:scale-95 transition duration-300";
  return (
    <footer>
      <Container>
        <div className="">
          <div className="mb-[100px] flex justify-between">
            <div className="w-full max-w-[560px]">
              <img
                className="mb-[40px] w-[300px]"
                src="/images/icons/logo.svg"
                alt="logo"
              />
              <p className="paragraph">
                We made it our mission to create community everyday and grow
                meaningful, lasting relationships with our staff, our suppliers
                and of course you, our customers.
              </p>
            </div>
            <div className="">
              <h3 className={`${title}`}>Contact Alowishus!</h3>
              <a
                className="mb-[30px] flex items-center gap-[24px] text-[30px] leading-[147%] text-darkGray"
                href="#"
              >
                <span className={`${icon}`}>
                  <img src="/images/icons/email.svg" alt="email icon" />
                </span>
                alowishus@gmai.com
              </a>
              <a
                className="mb-[30px] flex items-center gap-[24px] text-[30px] leading-[147%] text-darkGray"
                href="#"
              >
                <span className={`${icon}`}>
                  <img src="/images/icons/phone.svg" alt="phone icon" />
                </span>
                +110 214 214 2451
              </a>
              <ul className="flex items-center gap-[24px]">
                <li>
                  <a className={`${icon}`} href="#">
                    <img src="/images/icons/facebook.svg" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a className={`${icon}`} href="#">
                    <img src="/images/icons/instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a className={`${icon}`} href="#">
                    <img src="/images/icons/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a className={`${icon}`} href="#">
                    <img src="/images/icons/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-[100px] flex justify-between">
            <div className="w-full max-w-[560px]">
              <h3 className={`${title}`}>Store Locations</h3>
              <div className="paragraph mb-[30px]">
                Find your nearest Alowishus store with opening hours, location
                and contact details.
              </div>
              <a
                className="inline-flex items-center gap-[5px] text-[18px] font-semibold uppercase leading-[167%] text-black transition-all duration-300 sm:hover:gap-[15px]"
                href="#"
              >
                Find my Alowishus
                <span>
                  <img src="/images/icons/arrow.svg" alt="arrow icon" />
                </span>
              </a>
            </div>
            <form className="" action="#">
              <h3 className={`${title}`}>First One's On Us!</h3>
              <input className="mb-[30px]" type="email" placeholder="E-mail" />
              <button className="btn">Subscribe</button>
            </form>
          </div>
          <hr className="border-black/30" />
          <div className="flex items-center justify-between py-[40px] text-[22px] leading-[134%] text-darkGray">
            <span>
              Copytright © 2022{" "}
              <a className="font-medium text-black" href="#">
                Alowishus Delicious
              </a>
            </span>
            <span>Terms of Use | Privacy Policy</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
