import React from "react";

const Title = ({ text, className }) => {
  return (
    <span className={`section-title mb-[6px] ${className}`}>
      {text}
    </span>
  );
};

export default Title;
