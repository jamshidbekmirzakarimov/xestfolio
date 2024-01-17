"use client";
import Slider from "react-slick";
import Title from "@/UI/Title/Title";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <section className="pt-[159px] bg-white pb-[160px]">
        <div className="flex items-center justify-center flex-col">
          <Title className={"text-center"} text={"Testimonials"} />
          <h2 className="poppins text-[#131313] text-[40px] font-semibold leading-[135%] mb-[73px]">
            What our customer say
          </h2>
        </div>
        
        <Swiper
          slidesPerView={3}
          spaceBetween={120}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="flex">
            <SwiperSlide>
              <div className="w-[545px] h-[265px] bg-[red]">1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[545px] h-[265px] bg-[red]">2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[545px] h-[265px] bg-[red]">2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[545px] h-[265px] bg-[red]">1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[545px] h-[265px] bg-[red]">2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[545px] h-[265px] bg-[red]">2</div>
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
