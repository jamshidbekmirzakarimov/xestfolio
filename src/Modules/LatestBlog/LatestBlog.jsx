import Button from "@/UI/Button/Button";
import Title from "@/UI/Title/Title";
import Image from "next/image";
import React from "react";
import BlogImg from "../../assets/Images/blog-img.jpg";
import BlogImg2 from "../../assets/Images/blog-img2.jpg";
import Arrow from "../../assets/Svg/arrow.svg";
const LatestBlog = () => {
  const cardData = [
    {
      imageSrc: BlogImg,
      date: "UI Design | 22 May 2023",
      title: "What is UI Design in Front End Design?",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    },
    {
      imageSrc: BlogImg2,
      date: "UI Design | 22 May 2023",
      title: "What is UI Design in Front End Design?",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    },
  ];
  return (
    <>
      <section className="bg-[#181818] pt-[92px] pb-[138px] -z-40">
        <div className="container">
          <div className="flex items-center justify-between mb-[85px]">
            <div>
              <Title text={"LATEST BLOG"} />
              <h2 className="max-w-[447px] w-full poppins text-[#fff] text-[40px] font-semibold leading-[135%]">
                Check Some of Latest News & Articles
              </h2>
            </div>
            <div>
              <Button
                className={"urbanist bg-white"}
                className2={"urbanist"}
                text={"Load More"}
              />
            </div>
          </div>

          <ul className="grid grid-cols-2 justify-between gap-x-[50px] gap-y-[250px] mb-[150px]">
            <li className="cursor-pointer relative w-full">
              <div className="overflow-hidden">
                <Image
                  className="w-[611px] h-[392px] hover:scale-125 duration-300"
                  src={BlogImg}
                  alt=""
                />
              </div>
              <div className="bg-[#181818] w-[450px] pt-[20px] ps-[25px] ms-auto absolute z-50 right-0 top-[320px]">
                <p className="jakarta text-[#888] text-[13px] font-medium leading-[140%] mb-[7px]">
                  UI Design | 22 May 2023
                </p>
                <h3 className="poppins text-[30px] text-white font-semibold leading-[135%] mb-[22px]">
                  What is UI Design in Front End Design?
                </h3>
                <p className="jakarta text-[#aaa] text-[16px] font-medium leading-[140%] mb-[23px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system
                </p>
                <button className="jakarta text-[16px] group duration-300 flex items-center gap-[11px] font-bold text-white leading-[140%] tracking-[2.88px]">
                  READ MORE
                  <Image
                    className="group-hover:rotate-[90deg] duration-300"
                    src={Arrow}
                    alt="arrow"
                  />{" "}
                </button>
              </div>
            </li>

            <li className="cursor-pointer relative w-full">
              <div className="overflow-hidden">
                <Image
                  className="w-[611px] h-[392px] hover:scale-125 duration-300"
                  src={BlogImg2}
                  alt=""
                />
              </div>
              <div className="bg-[#181818] w-[450px] pt-[20px] ps-[25px] ms-auto absolute z-50 right-0 top-[320px]">
                <p className="jakarta text-[#888] text-[13px] font-medium leading-[140%] mb-[7px]">
                  UI Design | 22 May 2023
                </p>
                <h3 className="poppins text-[30px] text-white font-semibold leading-[135%] mb-[22px]">
                  What is UI Design in Front End Design?
                </h3>
                <p className="jakarta text-[#aaa] text-[16px] font-medium leading-[140%] mb-[23px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system
                </p>
                <button className="jakarta text-[16px] group duration-300 flex items-center gap-[11px] font-bold text-white leading-[140%] tracking-[2.88px]">
                  READ MORE
                  <Image
                    className="group-hover:rotate-[90deg] duration-300"
                    src={Arrow}
                    alt="arrow"
                  />{" "}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LatestBlog;
