import { useQuery } from "react-query";
import { fetchProfile, getFeed } from "./api";

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

export function useGetFeed() {
  return useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
    onSuccess: (data) => {
      console.log("Feed Data", data);
      return data;
    },
    onError: (err) => {
      console.log("Error while fetching Feed", err);
      return err;
    },
  });
}
