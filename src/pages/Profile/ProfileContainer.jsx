import { useFetchProfile } from "../../services/queries";
import Profile from "./Profile";

const ProfileContainer = () => {
  const profileQuery = useFetchProfile();

  console.log("PROFILE", profileQuery);

  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfileContainer;
