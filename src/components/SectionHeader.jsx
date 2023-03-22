import React from "react";

export const SectionHeader = ({ title, description }) => {
  return (
    <div className="mx-auto mb-[90px] max-w-[720px] text-center">
      <h2 className="section-title mb-[25px]">{title}</h2>
      <p className="paragraph">{description}</p>
    </div>
  );
};
