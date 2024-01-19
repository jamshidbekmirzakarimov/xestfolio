"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { isExpired } from "react-jwt";
import axios from "../api/api";
import useRole from "@/store/useRole";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const changeRole = useRole((state) => state.changeRole);

  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt") !== null) {
      const isMyTokenExpired = isExpired(localStorage.getItem("jwt"));
      if (isMyTokenExpired) {
        localStorage.removeItem("jwt");
      } else {
        router.push("/admin");
        return;
      }
    }
  }

  const onSubmit = (data) => {
    axios
      .post("/user/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData) {
          changeRole();
          localStorage.setItem("jwt", responseData.jwt);
          router.push("/admin");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(responseData, "bu datacha");
  };

  return (
    <>
      <section className="min-h-[80vh]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-col h-full gap-[30px]"
        >
          <div className="border-[1px] border-[#aaa] p-[30px] flex flex-col gap-[15px] rounded-[20px]">
            <h2 className="text-[30px]">Login</h2>
            <input
              className="border-[1px] border-[#000] ps-[15px] w-[400px] h-[50px] outline-none "
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            <div>
              <input
                className="border-[1px] border-[#000] ps-[15px] w-[400px] h-[50px] outline-none "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Email Address is required",
                })}
              />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="submit"
              className="text-white bg-cyan-500 rounded-md py-[10px]"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
