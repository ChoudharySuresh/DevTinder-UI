import RequestCard from "../../components/Card/RequestCard";

const Request = ({ requests }) => {
  return (
    <div>
      <div className="flex items-center gap-4 flex-wrap w-full max-w-[95%] mx-auto p-5">
        {requests?.map((item) => (
          <RequestCard data={item} key={item?._id} />
        ))}
      </div>
    </div>
  );
};

export default Request;
