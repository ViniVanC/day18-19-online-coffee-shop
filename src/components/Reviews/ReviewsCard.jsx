import React from "react";

export const ReviewsCard = ({ imgSrc, title, description, stars, delay }) => {
  return (
    <div
      className="overflow-hidden rounded-[16px] bg-white sm:max-w-[460px]"
      style={{
        filter: "drop-shadow(0px 20px 60px rgba(163, 168, 179, 0.15))",
      }}
    >
      <img src={imgSrc} alt={`${title}-img`} />
      <div className="p-[40px]">
        <div className="mb-[32px] flex items-center gap-[16px]">
          <h3 className="text-[24px] font-semibold leading-[125%] text-black">
            {title}
          </h3>
          <ul className="flex items-center gap-[3px]">
            {new Array(stars).fill().map((item, i) => (
              <li key={i}>
                <img src="/images/icons/star.svg" alt="star" />
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[20px] leading-[150%] text-black">"{description}"</p>
      </div>
    </div>
  );
};
