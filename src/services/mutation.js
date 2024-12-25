import { useMutation } from "react-query";
import { loginUser, signupUser } from "./api";

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
