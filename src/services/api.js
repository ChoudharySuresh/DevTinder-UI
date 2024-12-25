import axios from "axios";

const BASE_URL = "http://localhost:7777";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const signupUser = async (data) => {
  return (await axiosInstance.post("/signup", data)).data;
};

export const loginUser = async (data) => {
  return (await axiosInstance.post("/login", data)).data;
};

export const fetchProfile = async () => {
  return (await axiosInstance.get("/profile/view")).data;
};
