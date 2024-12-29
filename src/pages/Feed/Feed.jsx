import axios from "axios";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromFeed } from "../../store/Feed/feedSlice";

const Feed = ({ data }) => {
  return (
    <div className="grid place-items-center w-full h-screen">
      {data?.map((item) => (
        <Card key={item?._id} id={item?._id} data={item} />
      ))}
    </div>
  );
};

const Card = ({ id, data }) => {
  const feed = useSelector((state) => state.feed.feedData);
  const x = useMotionValue(0);
  const dispatch = useDispatch();

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === feed[feed?.length - 1]._id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        `http://localhost:7777/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      console.log("Sending Request..", res);

      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDragEnd = () => {
    if (x.get() > 100) {
      handleSendRequest("interested", data._id);
    } else if (x.get() < -100) {
      handleSendRequest("ignored", data._id);
    }
  };
  return (
    <>
      <motion.div
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          rotate,
          opacity,
          transition: "0.125s transform",
        }}
        animate={{
          scale: 0.98,
        }}
        drag={"x"}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
        className="card bg-base-100 w-80 shadow-xl origin-bottom hover:cursor-grab active:cursor-grabbing"
      >
        <figure>
          <img src={data?.photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.firstName} {data?.lastName}
          </h2>
          <p>
            {data?.age ? data?.age : "-"} {data?.gender ? data?.gender : "-"}
          </p>
          <p>{data?.about}</p>
          <div className="flex items-center gap-2">
            {data?.skills?.map((item) => (
              <div
                key={item}
                className="bg-gray-700 text-white rounded-xl px-4 py-1"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Feed;
