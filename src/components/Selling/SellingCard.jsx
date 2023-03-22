import React from "react";

export const SellingCard = ({ title, description, price, imgSrc, num }) => {
  return (
    <div
      className="relative rounded-[24px] bg-white p-[30px] sm:w-1/3"
      style={{
        boxShadow: "0px 30px 60px rgba(163, 168, 179, 0.3)",
      }}
    >
      <div className="mb-[20px] h-[190px] pl-[170px]">
        <img
          className="absolute top-[-70px] left-0 h-[305px] w-[186px] object-contain"
          src={imgSrc}
          alt={`selling coffee img${num}`}
        />
        <div>
          <h4 className="mb-[8px] text-[20px] font-medium leading-[140%] text-darkGray">
            #{num} Selling
          </h4>
          <h3 className="text-[40px] font-semibold leading-[110%] text-black">
            {title}
          </h3>
        </div>
      </div>
      <p className="paragraph mb-[40px] text-[20px] leading-[140%]">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[30px] font-medium leading-[93%]">${price}</span>
        <button className="btn">Order now</button>
      </div>
    </div>
  );
};
