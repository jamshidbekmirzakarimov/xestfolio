"use client";
import { useRouter } from "next/navigation";
import { isExpired } from "react-jwt";
const Admin = () => {
  const isMyTokenExpired = isExpired(localStorage.getItem("jwt"));
  const router = useRouter();
  if (isMyTokenExpired) {
    localStorage.removeItem("jwt");
    router.push("/login");
    return;
  } 

  return <div>Admin</div>;
};

export default Admin;
