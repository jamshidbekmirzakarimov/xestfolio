"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { isExpired } from "react-jwt";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  if (localStorage.getItem("jwt") !== null) {
    const isMyTokenExpired = isExpired(localStorage.getItem("jwt"));
    if (isMyTokenExpired) {
      localStorage.removeItem("jwt");
    } else {
      router.push("/admin");
      return;
    }
  }

  const onSubmit = (data) => {
    fetch("http://95.130.227.6:8000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData) {
          localStorage.setItem("jwt", responseData.jwt);
          router.push("/admin");
        }
      });
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
