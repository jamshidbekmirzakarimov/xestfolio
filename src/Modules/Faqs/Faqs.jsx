"use client";
import React, { useEffect } from "react";
import Solution from "../../assets/Svg/arrow-bottom.svg";
import Image from "next/image";
import "./Faqs.scss";

const Solutions = () => {
  useEffect(() => {
    const details = Array.from(document.querySelectorAll("details"));

    const handleClick = (targetDetail) => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    };

    const handleDetailClick = (event) => {
      const targetDetail = event.currentTarget;
      handleClick(targetDetail);
    };

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", handleDetailClick);
    });

    // Open the first details element by default
    details[0].setAttribute("open", "");

    return () => {
      details.forEach((targetDetail) => {
        targetDetail.removeEventListener("click", handleDetailClick);
      });
    };
  }, []);

  const FaqData = [
    {
      title: "How can we help your business?",
      desc: `Biometrik uskunalarni xarid qilish, ularning montaji va dasturiy
        ta’minotiga ulkan mablag‘larni investitsiya qilish zarurati.`,
    },
    {
      title: "What are the advantages of Bisnext",
      desc: `Biometrik uskunalarni xarid qilish, ularning montaji va dasturiy
          ta’minotiga ulkan mablag‘larni investitsiya qilish zarurati.`,
    },
    {
      title: "Let’s find an office near you?",
      desc: `Biometrik uskunalarni xarid qilish, ularning montaji va dasturiy
            ta’minotiga ulkan mablag‘larni investitsiya qilish zarurati.`,
    },
    {
      title: "How IT consultancy experts work?",
      desc: `Biometrik uskunalarni xarid qilish, ularning montaji va dasturiy
            ta’minotiga ulkan mablag‘larni investitsiya qilish zarurati.`,
    },
  ];

  return (
    <section className="bg-[#181818] pt-[116px] pb-[131px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[20px]">
            {FaqData.map((faqs, index) => (
              <details key={index}>
                <summary className="mb-[-1px] relative">
                  <div className="flex items-center justify-between overflow-hidden">
                    <div className="flex items-center gap-[16px]">
                      <span className="summary-title">{faqs?.title}</span>
                    </div>
                    <div className="summary-chevron-up absolute right-[30px]">
                      <Image src={Solution} alt="Solution" />
                    </div>
                  </div>
                </summary>

                <div className="summary-content">{faqs.desc}</div>
              </details>
            ))}
          </div>
          sdfgggt
        </div>
      </div>
    </section>
  );
};

export default Solutions;
