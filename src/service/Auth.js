import axios from "../app/api/api";

export const Auth = {
  async login(data) {
    axios
      .post("/user/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData) {
          console.log(responseData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async getUser() {
    axios
      .get("/users", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData) {
          return responseData?.data;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
  companyName: "ASTROLAB new",
  status: "true",

};

export const getUser = () => {};
export const creatUser = () => {};
