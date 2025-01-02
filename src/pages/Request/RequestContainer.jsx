import { createContext, useContext } from "react";
import { useGetRequests } from "../../services/queries";
import Request from "./Request";
import { useRequestStatus } from "../../services/mutation";
import { useQueryClient } from "react-query";

const RequestContext = createContext();

export const useRequestContext = () => useContext(RequestContext);

const RequestContainer = () => {
  const requestQuery = useGetRequests();
  const sendRequestMutation = useRequestStatus();
  const queryClient = useQueryClient();

  console.log("Request Query Response", requestQuery?.data);

  if (requestQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleRequest = (status, requestId) => {
    console.log(`Handling request ${status} with action: ${requestId}`);
    sendRequestMutation.mutate(
      { status, requestId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["request"]);
          queryClient.invalidateQueries(["connection"]);
        },
      }
    );
  };

  if (requestQuery?.data?.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No More Requests Are Present</p>
      </div>
    );
  }

  // console.log("Request status", sendRequestMutation.data);

  return (
    <RequestContext.Provider value={{ handleRequest }}>
      <div className="min-h-screen">
        <Request requests={requestQuery.data} />
      </div>
    </RequestContext.Provider>
  );
};

export default RequestContainer;
