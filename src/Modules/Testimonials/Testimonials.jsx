"use client";
import Title from "@/UI/Title/Title";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import Quoteup from "../../assets/Svg/quote-up.svg";
import User from "../../assets/Images/user.png";
import User2 from "../../assets/Images/user2.png";
import Star from "../../assets/Svg/star.svg";
const Testimonials = () => {
  const TestimonialsData = [
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      image: User,
      star: "4.3",
      name: "Janne Cooper",
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      image: User2,
      star: "4.3",
      name: "Cobocannaeru",
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      image: User,
      star: "4.3",
      name: "Janne Cooper",
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      image: User2,
      star: "4.3",
      name: "Cobocannaeru",
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      image: User,
      star: "4.3",
      name: "Janne Cooper",
    },
    {
      desc: "“Now, i can track my business activity with easier and have a great understandable to operate the products",
      image: User2,
      star: "4.3",
      name: "Cobocannaeru",
    },
  ];
  return (
    <>
      <section className="pt-[159px] bg-white pb-[160px] overflow-hidden">
        <div className="flex items-center justify-center flex-col">
          <Title className={"text-center"} text={"Testimonials"} />
          <h2 className="poppins text-[#131313] text-[40px] font-semibold leading-[135%] mb-[73px]">
            What our customer say
          </h2>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="flex items-center justify-between">
            {TestimonialsData.map((testimonials, index) => (
              <SwiperSlide key={index}>
                <div className="testimonials cursor-pointer group duration-500 hover:bg-fuchsia-600 test-swipe w-[545px] bg-[#fff] pt-[26px] ps-[24px] pb-[24px] pe-[24px]">
                  <div className="w-[70px] h-[70px] bg-white rounded-[50%] flex items-center justify-center mb-[20px]">
                    <Image className="" src={Quoteup} />
                  </div>
                  <p className="poppins text-[18px] font-normal leading-[180%] max-w-[497px] w-full mb-[26px] text-[#090D23] group-hover:text-white duration-300">
                    {testimonials.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[14px]">
                      <Image src={testimonials.image} alt="user" />
                      <h3 className="poppins text-[#090D23] text-[20px] font-medium leading-[130%] group-hover:text-white duration-300">
                        {testimonials.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <Image src={Star} alt="star" />
                      <p className="poppins text-[18px] font-semibold leading-[130%] text-[#090D23] group-hover:text-white duration-300">
                        {testimonials.star}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
