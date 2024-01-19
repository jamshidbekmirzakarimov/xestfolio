"use client";

import useRole from "@/store/useRole";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import AdminHeader from "../AdminHeader/AdminHeader";

const Layout = ({ children }) => {
  const role = useRole((state) => state.role);

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
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
