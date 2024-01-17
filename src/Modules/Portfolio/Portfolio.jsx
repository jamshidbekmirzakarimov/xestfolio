import Button from "@/UI/Button/Button";
import Title from "@/UI/Title/Title";
import Image from "next/image";
import React from "react";
import Portifolio1 from "../../assets/Images/PORTIFOLIO1.jpg";
import Portifolio2 from "../../assets/Images/PORTIFOLIO2.jpg";
import Portifolio3 from "../../assets/Images/PORTIFOLIO3.jpg";
const Portfolio = () => {
  return (
    <>
      <section className="mb-[175px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Title text={"Portfolio"} />
              <h2 className="poppins text-[#131313] text-[40px] font-semibold leading-[135%] mb-[50px]">
                Some Of Our Best Works{" "}
              </h2>
            </div>
            <div>
              <Button
                className={"urbanist"}
                className2={"urbanist"}
                text={"Load More"}
              />
            </div>
          </div>
          <ul className="portfolio-list">
            <li className="portfolio-item-1 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio1}
                alt=""
              />
            </li>
            <li className="portfolio-item-2 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio2}
                alt=""
              />
            </li>
            <li className="portfolio-item-3 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio3}
                alt=""
              />
            </li>
            <li className="portfolio-item-4 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio3}
                alt=""
              />
            </li>
            <li className="portfolio-item-5 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio2}
                alt=""
              />
            </li>
            <li className="portfolio-item-6 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio1}
                alt=""
              />
            </li>
            <li className="portfolio-item-7 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio1}
                alt=""
              />
            </li>
            <li className="portfolio-item-8 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio2}
                alt=""
              />
            </li>
            <li className="portfolio-item-9 overflow-hidden cursor-pointer">
              <Image
                className="hover:scale-125 duration-300"
                src={Portifolio3}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
