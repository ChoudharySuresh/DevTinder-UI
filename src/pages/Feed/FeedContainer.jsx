import { useEffect } from "react";
import { useGetFeed } from "../../services/queries";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../store/Feed/feedSlice";

const FeedContainer = () => {
  const feed = useSelector((state) => state.feed.feedData);
  const dispatch = useDispatch();
  const feedQuery = useGetFeed();

  useEffect(() => {
    // Dispatch data from feedQuery if available
    if (feedQuery.data && (!feed || feed.length === 0)) {
      dispatch(addFeed(feedQuery.data.data));
    }
  }, [feedQuery.data, feed, dispatch]);

  if (feedQuery.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (feedQuery.isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {feedQuery.error.message || "Something went wrong!"}</p>
      </div>
    );
  }

  if (feed?.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No Users Are Found</p>
      </div>
    );
  }

  return (
    <div>
      <Feed data={feed} />
    </div>
  );
};

export default FeedContainer;
