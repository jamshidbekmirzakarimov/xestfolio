"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { isExpired } from "react-jwt";
import useRole from "@/store/useRole";
import { colors } from "../admin/blog/helpers";
import useAuth from "@/service/useAuth";


const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();


  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt") !== null) {
      const isMyTokenExpired = isExpired(localStorage.getItem("jwt"));
      if (isMyTokenExpired) {
        localStorage.removeItem("jwt");
      } else {
        router.push("/admin/dashboard");
        return null;
      }
    }
  }

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <section className="min-h-[80vh]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-col h-full gap-[30px]"
        >
          <div className="border-[1px] border-[#aaa] p-[30px] flex flex-col gap-[15px] rounded-[20px]">
            <h2 className="text-[30px]" style={{ color: colors.yellow }}>
              Login
            </h2>
            <input
              className="border-[1px] border-[#000] ps-[15px] w-[400px] h-[50px] outline-none"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            <div>
              <input
                className="border-[1px] border-[#000] ps-[15px] w-[400px] h-[50px] outline-none"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Email Address is required",
                })}
              />
            </div>
            {errors.email && <span>{errors.email.message}</span>}

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