import { useQuery } from "react-query";
import { fetchProfile, getConnections, getFeed, getRequests } from "./api";

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

export function useGetConnections() {
  return useQuery({
    queryKey: ["connection"],
    queryFn: getConnections,
    onSuccess: () => {
      console.log("Connection success");
    },
    onError: (err) => {
      console.log("Error while Connection Query", err);
    },
  });
}
export function useGetRequests() {
  return useQuery({
    queryKey: ["request"],
    queryFn: getRequests,
    onSuccess: () => {
      console.log("Connection success");
    },
    onError: (err) => {
      console.log("Error while Connection Query", err);
    },
  });
}
