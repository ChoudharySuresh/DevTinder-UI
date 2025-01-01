import { useGetRequests } from "../../services/queries";
import Request from "./Request";

const RequestContainer = () => {
  const requestQuery = useGetRequests();
  console.log("Request Query Response", requestQuery?.data);

  if (requestQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Request requests={requestQuery.data} />
    </div>
  );
};

export default RequestContainer;
