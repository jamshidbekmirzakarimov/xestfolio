"use client";
import useRole from "@/store/useRole";
import React, { useState } from "react";
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
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex bg-slate-200">
        <SideBar  />
        <div className="w-full"
        style={{
          width: drawer ? "75%" : "95%",
          padding: "0px",
          position: "relative",
          height: "100vh",
        }}>
          <AdminHeader />
          <div className="px-[20px] pt-[20px]">{children}</div>
        </div>
      </div>
    </>
  );
};
