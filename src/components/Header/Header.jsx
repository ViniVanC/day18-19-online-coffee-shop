import React from "react";
import { Container } from "../Container";
import { Navbar } from "./Navbar";
import { navList } from "../../db";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full py-[24px]">
      <Container>
        <div className="flex items-center justify-between gap-[30px]">
          <img
            className="w-full max-w-[126px] cursor-pointer max-sm:max-w-[100px]"
            src="/images/icons/logo.svg"
            alt="logo"
          />
          <div className="flex items-center gap-[40px]">
            <Navbar itemsList={navList} />
            <div className="flex items-center gap-[20px]">
              <button className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white transition duration-300 sm:hover:scale-105">
                <img src="/images/icons/cart.svg" alt="cart icon" />
              </button>
              <button className="btn">Buy gift vouchers</button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
