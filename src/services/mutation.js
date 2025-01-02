import { useMutation, useQueryClient } from "react-query";
import {
  loginUser,
  logoutUser,
  postRequestStatus,
  signupUser,
  updateProfile,
} from "./api";

export function useSignUpUser() {
  return useMutation({
    mutationFn: (data) => signupUser(data),
    onMutate: () => {
      console.log("Mutate");
    },
    onSuccess: (response) => {
      console.log("User is Successfully Signed UP", response);
      return response;
    },
    onError: () => {
      console.log("OOps Got Error");
    },
  });
}

export function useLoginUser() {
  return useMutation({
    mutationFn: (data) => loginUser(data),
    onMutate: () => {
      console.log("Mutate");
    },
    onSuccess: (response) => {
      console.log("User is Successfully Loged In", response);
      return response;
    },
    onError: () => {
      console.log("ERROR LOGIN");
    },
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateProfile(data),
    onMutate: () => {
      console.log("Updating Profile");
    },
    onSuccess: (response) => {
      console.log("Update the Profile Successfully", response);
      if (response) {
        queryClient.invalidateQueries(["user"]);
      }
      return response;
    },
    onError: (error) => {
      console.log("Error Update Profile");
      return error;
    },
  });
}

export function useLogoutUser() {
  return useMutation({
    mutationFn: () => logoutUser(),
    onMutate: () => {
      console.log("Updating Profile");
    },
    onSuccess: (response) => {
      console.log("Logout Successfully", response);
      return response;
    },
    onError: (error) => {
      console.log("Error Update Profile");
      return error;
    },
  });
}

export function useRequestStatus() {
  return useMutation({
    mutationFn: ({ status, requestId }) => postRequestStatus(status, requestId),
    onMutate: () => {
      console.log("Request send");
    },
    onSuccess: (response) => {
      console.log("Request Successfully", response);
      return response;
    },
    onError: (error) => {
      console.log("Error Request ");
      return error;
    },
  });
}
