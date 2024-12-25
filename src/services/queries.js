import { useQuery } from "react-query";
import { fetchProfile } from "./api";

export function useFetchProfile() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchProfile,
    onSuccess: (data) => {
      console.log("User Profile Data", data);
      return data;
    },
    onError: (err) => {
      console.log("Error while fetching User Profile", err);
      return err;
    },
  });
}
