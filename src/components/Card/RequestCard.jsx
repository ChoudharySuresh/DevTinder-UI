import { useRequestContext } from "../../pages/Request/RequestContainer";

const RequestCard = ({ data }) => {
  const { handleRequest } = useRequestContext();

  return (
    <div>
      <div className="card glass w-96">
        <figure className="min-h-full h-[18rem]">
          <img src={data?.fromUserId?.photoUrl} alt="PorfilePic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.fromUserId?.firstName}
            {data?.fromUserId?.lastName}
          </h2>
          <p>{data?.fromUserId?.age}</p>
          <p>{data?.fromUserId?.about}</p>
          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-outline btn-error"
              onClick={() => handleRequest("rejected", data?._id)}
            >
              Reject
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleRequest("accepted", data?._id)}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
