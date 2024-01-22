import useRole from "@/store/useRole";
import axios from "../api/api";
import { useRouter } from "next/navigation";


const useAuth = () => {
  const router = useRouter();
  const changeRole = useRole((state) => state.changeRole);

  const login = async (data) => {
    try {
      const response = await axios.post("/user/login", data, {
        headers: { "Content-Type": "application/json" },
      });
      const responseData = response.data;
      if (responseData) {
        changeRole();
        localStorage.setItem("jwt", responseData.jwt);
        router.push("/admin/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get("/users", {
        headers: { "Content-Type": "application/json" },
      });
      const responseData = response.data;
      if (responseData) {
        return responseData?.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
    getUser,
    companyName: "ASTROLAB new",
    status: "true",
  };
};

export default useAuth;