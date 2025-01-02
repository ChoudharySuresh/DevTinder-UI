const ConnectionCard = ({ data }) => {
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure className="px-10 pt-10 w-1/2 mx-auto">
          <img src={data?.photoUrl} alt="ProfilePic" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {data?.firstName}
            {data?.lastName}
          </h2>
          <p>{data?.about}</p>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            {data?.skills?.map((skill) => (
              <div
                className="px-4 py-1 bg-gray-500 rounded-full text-white"
                key={skill}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
