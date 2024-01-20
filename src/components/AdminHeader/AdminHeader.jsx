import React from "react";
import User1 from "../../assets/Images/user.png"
import Image from "next/image";
const AdminHeader = () => {
  return (
    <>
      <header className="w-full h-[8vh] flex items-centerjustify-between bg-white px-[20px]">
        <div className="flex items-center justify-between w-full">
          <h2 className="jakarta font-medium text-black flex items-center text-[22px] gap-[10px]">Blog</h2>
          <div className="flex items-center gap-[10px]">
           <p className="text-[#000] poppins font-medium leading-normal">John Doe</p> <Image src={User1}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
