import Title from "@/UI/Title/Title";
import React from "react";
import Image from "next/image";
import Arrow2 from "../../assets/Svg/arrow2.svg"
import Logo from "../../assets/Svg/logo.svg"
import Facebook from "../../assets/Svg/facebook.svg"
import Linkedin from "../../assets/Svg/linkedin.svg"
import Instagram from "../../assets/Svg/instagram.svg"
import Be from "../../assets/Svg/be.svg"
import Ball from "../../assets/Svg/ball.svg"
const Project = () => {
  return (
    <article className="pt-[142px] pb-[69px]">
      <div className="flex items-center justify-center flex-col">
        <Title text={"Have you project in mind?"} />
        <h2 className="text-[#131313] text-[60px] font-semibold leading-[135%] max-w-[668px] w-full text-center mb-[37px]">Let’s Make Something Great Together!</h2>
        <div className="circle w-[250px] h-[250px] rounded-[50%] flex items-center justify-center mb-[101px]">
           <div className="flex items-center justify-center flex-col">
           <p className="text-white text-[16px] font-bold leading-[140%] tracking-[2.88px] mb-[16px]">CONTACT WITH US</p>
           <Image src={Arrow2} alt="arrow"/>
           </div>
        </div>
        <Image className="mb-[86px]" src={Logo} alt="logo"/>

        <ul className="flex items-center justify-between w-[761px]">
            <li>
                <a href="https://www.facebook.com/campaign/landing.php?&campaign_id=11554070363&extra_1=s%7Cc%7C518929547024%7Ce%7Cfacebook%7C&placement=&creative=518929547024&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3LxFVjcQeQP5u3gLzpgCxFR5SK-AchGjfsx3Fy7rziTpvt5RFtdwOIaAn10EALw_wcB" target="_blank">
                <Image src={Facebook} alt=""/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/" target="_blank">
                <Image src={Linkedin} alt=""/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/jamshidbek_codes/" target="_blank">
                <Image src={Instagram} alt=""/>
                </a>
            </li>
            <li>
                <a href="#" target="_blank ">
                <Image src={Be} alt=""/>
                </a>
            </li>
            <li>
               <a href="#" target="_blank">
               <Image src={Ball} alt=""/>
               </a>
            </li>
        </ul>
      </div>
    </article>
  );
};

export default Project;
