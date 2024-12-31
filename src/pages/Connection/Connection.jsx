import ConnectionCard from "../../components/Connection/ConnectionCard";

const Connection = ({ connections }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap w-full max-w-[95%] mx-auto p-5">
      {connections?.map((item) => (
        <ConnectionCard data={item} key={item?._id} />
      ))}
    </div>
  );
};

export default Connection;
