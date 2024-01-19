"use client";
import { useRouter } from "next/navigation";
import { isExpired } from "react-jwt";
const Admin = () => {
  const token = localStorage.getItem("jwt");
  const router = useRouter();
  if (token) {
    const isMyTokenExpired = isExpired(token);
    if (isMyTokenExpired) {
      localStorage.removeItem("jwt");
      router.push("/login");
      return;
    }
  }
  if (!token) {
    localStorage.removeItem("jwt");
    router.push("/login");
    return;
  }

  return <div>Admin</div>;
};

export default Admin;
