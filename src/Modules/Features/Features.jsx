import Button from "@/UI/Button/Button";
import Title from "@/UI/Title/Title";
import React from "react";
import FeaturesImg from "../../assets/Images/features-img.jpg";
import Image from "next/image";
const Features = () => {
  const featuresData = [
    {
      title: "UI Design",
      description:
        "I design products that are more than pretty. I make them usable.",
    },
    {
      title: "UX Experience",
      description:
        "I design products that are more than pretty. I make them usable.",
    },
    {
      title: "Product Design",
      description:
        "I design products that are more than pretty. I make them usable.",
    },
    {
      title: "Product Analysis",
      description:
        "I design products that are more than pretty. I make them usable.",
    },
  ];

  const featuresData2 = [
    {
      number: "12K+",
      text: "Project Complete",
    },
    {
      number: "7K+",
      text: "Happy Client",
    },
    {
      number: "10+",
      text: "Years Experience",
    },
    {
      number: "270+",
      text: "Win Awards",
      textColor: "yellow",
    },
  ];
  return (
    <>
      <section className="mb-[212px]">
        <div className="container">
          <div className="flex justify-between mb-[147px]">
            <div>
              <Title text={"FEATURES"} />
              <h2 className="poppins text-[#131313] text-[40px] font-semibold leading-[135%] max-w-[423px] mb-[32px]">
                Giving Your Business Some Great Ideas
              </h2>
              <p className="text-[#aaa] text-[16px] font-medium leading-[140%] max-w-[450px] w-full mb-[43px]">
                Every designer needs the right tools to do the perfect job.
                Thankfully, we can do that. I design products that are more than
                pretty. I make them shippable and usable.
              </p>
              <Button className={"urbanist"} className2={"urbanist"} text={"Contact US"} />
            </div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-y-[49px] gap-x-[29px] mt-[40px]">
              {featuresData.map((feature, index) => (
                <li
                  key={index}
                  className={`w-[270px] ${index % 2 === 1 ? "mt-[-50px]" : ""}`}
                >
                  <div className="overflow-hidden mb-[7px]">
                    <Image
                      className="grayscale hover:grayscale-0 cursor-pointer duration-300 hover:scale-125"
                      src={FeaturesImg}
                      alt=""
                    />
                  </div>
                  <h3 className="poppins text-[#131313] text-[24px] font-semibold leading-[140%] mb-[11px]">
                    {feature.title}
                  </h3>
                  <p className="jakarta text-[16px] font-medium text-[#aaa]">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex items-center justify-between">
            {featuresData2.map((feature, index) => (
              <li key={index} className="flex items-center flex-col">
                <h3 className={`features-numbers`}>
                  {feature.number}
                </h3>
                <p className="text-[#000] jakarta text-[16px] font-semibold leading-[140%]">
                  {feature.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
