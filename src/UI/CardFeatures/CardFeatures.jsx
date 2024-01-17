import Features from "@/Modules/Features/Features";
import React from "react";

const cardData = [
  {
    image: "../../assets/Images/features-img.jpg",
    title: "UI Design",
    description: "I design products that are more than pretty. I make them usable.",
  },
  {
    image: "../../assets/Images/features-img.jpg",
    title: "UX Experience",
    description: "I design products that are more than pretty. I make them usable.",
  },
  {
    image: "../../assets/Images/features-img.jpg",
    title: "Product Design",
    description: "I design products that are more than pretty. I make them usable.",
  },
  {
    image: "../../assets/Images/features-img.jpg",
    title: "Product Analysis",
    description: "I design products that are more than pretty. I make them usable.",
  },
];

const CardFeatures = () => {
  return <Features cards={cardData} />;
};

export default CardFeatures;