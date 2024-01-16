import Image from "next/image";
import React from "react";
import HeroImg from "../../assets/Images/heroImg.jpg";
import Button from "@/UI/Button/Button";
const Hero = () => {
  return (
    <>
      <section className="h-[90vh] grid place-items-center mb-[72px]">
        <div className="container">
          <div className="flex items-center">
            <div>
              <h2 className="jakarta uppercase text-[170px] font-extrabold leading-[95%] tracking-[-8.5px] mb-[30px]">
                <span className="hero-title">Miami</span> Walke
                <span className="text-white">r</span>
              </h2>
              <p className="jakarta max-w-[550px] text-[20px] text-[#666] font-normal leading-[33px] mb-[63px]">
                Award Wining product designer based in Georgia. We create
                user-friendly interfaces for fast-growing startups.
              </p>
              <Button className={"urbanist"} text={"Book A Call"}/>
            </div>
            <Image className="ms-[-80px] -z-40 w-[560px] h-[699px]" src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
