import React from "react";

export const OurRangeCard = ({
  title,
  description,
  btnText,
  imgSrc,
  delay,
}) => {
  return (
    <div
      className="rounded-[24px] bg-white p-[40px]"
      style={{
        boxShadow: "0px 30px 60px rgba(163, 168, 179, 0.3)",
        flex: "0 1 33.3%",
      }}
    >
      <h3 className="mb-2 text-[36px] font-semibold leading-[144%] text-black">
        {title}
      </h3>
      <p className="paragraph">{description}</p>
      <img className="my-[60px] mx-auto" src={imgSrc} alt="icon" />
      <button className="btn mx-auto">{btnText}</button>
    </div>
  );
};
