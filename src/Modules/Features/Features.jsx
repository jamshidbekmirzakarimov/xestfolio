import Button from "@/UI/Button/Button";
import Title from "@/UI/Title/Title";
import React from "react";
import FeaturesImg from "../../assets/Images/features-img.jpg";
import Image from "next/image";
const Features = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between">
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
              <Button className={"urbanist"} text={"Contact US"} />
            </div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-y-[49px] gap-x-[29px]">
              <li className="w-[270px]">
                <Image className="sepia-[100%]" src={FeaturesImg} alt="" />
                UI Design
              </li>
              <li className="w-[270px] mt-[-50px]">
                <Image className="sepia-[100%]" src={FeaturesImg} alt="" />
                UX Experience 
              </li>
              <li className="w-[270px]">
                <Image className="sepia-[100%]" src={FeaturesImg} alt="" />
                Product Design
              </li>
              <li className="w-[270px] mt-[-50px]">
                <Image className="sepia-[100%]" src={FeaturesImg} alt="" />
                Product Analysis
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
