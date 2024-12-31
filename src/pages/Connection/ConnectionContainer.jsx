import { useGetConnections } from "../../services/queries";
import Connection from "./Connection";

const ConnectionContainer = () => {
  const connectionQuery = useGetConnections();
  console.log("Connection Query Response", connectionQuery?.data);

  if (connectionQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Connection connections={connectionQuery.data} />
    </div>
  );
};

export default ConnectionContainer;
