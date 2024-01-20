"use client";

import useRole from "@/store/useRole";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import AdminHeader from "../AdminHeader/AdminHeader";

const Layout = ({ children }) => {
  const role = useRole((state) => state.role);
console.log(role, "bu rol");
  return (
    <>
      {role ? (
        <UserLayout>{children}</UserLayout>
      ) : (
        <AboutLayout>{children}</AboutLayout>
      )}
    </>
  );
};

export default Layout;

export const AboutLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export const UserLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen flex bg-[red]">
        <SideBar />
        <div className="w-full">
          <AdminHeader />
          <div className="px-[20px] h-[92vh] pt-[20px]">{children}</div>
        </div>
      </div>
    </>
  );
};
