import React from "react";

export const Navbar = ({ itemsList }) => {
  return (
    <nav>
      <ul className="flex items-center gap-[40px]">
        {itemsList.map(({ title, href }, i) => (
          <li
            className="text-[15px] font-medium leading-[146%] text-black transition duration-300 active:scale-95 sm:hover:text-darkGray"
            key={i}
          >
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
