import { Outlet, useNavigate } from "react-router";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useFetchProfile } from "./services/queries";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/User/userSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const profileQuery = useFetchProfile();

  useEffect(() => {
    if (userInfo) return;
    if (profileQuery?.isSuccess) {
      dispatch(addUser(profileQuery?.data?.data));
    } else if (profileQuery.isError) {
      navigate("/login");
    }
  }, [profileQuery?.isSuccess, profileQuery?.error]);

  // console.log("PROFILE IN ROOT", profileQuery?.data?.data);
  // console.log("PROFILE", profileQuery?.error?.status);
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
