import Image from "next/image";
import React from "react";
import Login from "../../assets/Svg/logo.svg";
import Link from "next/link";
const SideBar = () => {
  return (
    <>
      <section className="min-h-screen w-[25%] bg-white pt-[20px] px-[20px]">
        <div>
          <div className="mb-[30px]">
            <Image src={Login} />
          </div>
          <ul className="w-full">
            <li className="">
              <Link href="/admin/dashboard">
              <div className="mb-[15px] py-[10px] px-[10px] bg-[red] rounded-[5px]">Dashboard</div>
              </Link>
            </li>
            <li className="">
              <Link href="/admin/blog">
              <div className="mb-[15px] py-[10px] px-[10px] bg-[red] rounded-[5px]">Blog</div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
