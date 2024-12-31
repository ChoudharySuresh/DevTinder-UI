const ConnectionCard = ({ data }) => {
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl card-bordered card-side border-gray-600 p-4">
        <div>
          <div>
            <img
              src={data?.fromUserId?.photoUrl}
              alt="profilePic"
              className="w-[5rem] rounded-full"
            />
          </div>
          <div className="mt-4">
            <h1>
              {data?.fromUserId?.firstName} {data?.fromUserId?.lastName}
            </h1>
            <p>{data?.fromUserId?.age || "-"}</p>
            <p>{data?.fromUserId?.about}</p>
            <div className="flex items-start gap-4 flex-wrap mt-4">
              {data?.fromUserId?.skills?.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-gray-500 rounded-xl text-white"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
