import Image from "next/image";
import React from "react";
import Login from "../../assets/Svg/logo.svg";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { useRouter } from "next/navigation";
const SideBar = () => {
  const logout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  const location = useRouter();
  console.log(location, "bu location");
  return (
    <>
      <section className="min-h-screen w-[25%] bg-white pt-[20px]  px-[20px] ">
        <div className=" h-full relative">
          <div className="flex items-center justify-center mb-[30px]">
            <div className="w-full flex items-center justify-between">
              <Image width={60} height={60} src={Login} />
              <MdOutlineMenu className="w-[30px] h-[30px] cursor-pointer" />
            </div>
          </div>
          <ul className="w-full">
            <li className="">
              <Link href="/admin/dashboard">
                <div className="flex items-center gap-[10px] mb-[15px] py-[10px] px-[10px] bg-pink-700 rounded-[5px]">
                  <MdDashboard className="text-white" />
                  <h3 className="jakarta text-white">Dashboard</h3>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href="/admin/blog">
                <div className="flex items-center gap-[10px] mb-[15px] py-[10px] px-[10px] bg-pink-700 rounded-[5px]">
                  <MdContentPaste className="text-white" />
                  <h3 className="jakarta text-white">Blog</h3>
                </div>
              </Link>
            </li>
          </ul>
          <button
            onClick={logout}
            className="absolute bottom-[20px] w-[100%] bg-pink-700"
          >
            <p>logout</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default SideBar;
