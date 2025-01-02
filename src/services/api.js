import axios from "axios";

const BASE_URL = "http://localhost:7777";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const signupUser = async (data) => {
  return (
    await axiosInstance.post("/signup", data, {
      withCredentials: true,
    })
  ).data;
};

export const loginUser = async (data) => {
  return (await axiosInstance.post("/login", data, { withCredentials: true }))
    .data;
};

export const logoutUser = async () => {
  return (await axiosInstance.post("/logout", {}, { withCredentials: true }))
    .data;
};

export const fetchProfile = async () => {
  return (await axiosInstance.get("/profile/view", { withCredentials: true }))
    .data;
};

export const updateProfile = async (data) => {
  return (
    await axiosInstance.patch("/profile/edit", data, {
      withCredentials: true,
    })
  ).data;
};

// Feed
export const getFeed = async () => {
  return (await axiosInstance.get("/feed", { withCredentials: true })).data;
};

// Connection Requests
export const getConnections = async () => {
  return (
    await axiosInstance.get("/user/connections", {
      withCredentials: true,
    })
  ).data.data;
};

// Get Requests
export const getRequests = async () => {
  return (
    await axiosInstance.get("/user/requests/received", {
      withCredentials: true,
    })
  ).data.data;
};

// Send the Status of request
export const postRequestStatus = async (status, requestId) => {
  return (
    await axiosInstance.post(
      `/request/review/${status}/${requestId}`,
      {},
      { withCredentials: true }
    )
  )?.data;
};
