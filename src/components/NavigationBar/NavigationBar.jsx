import Logo from "../../assets/Logo/Logo.png";
import { PiGlobeLight } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import { useLogoutUser } from "../../services/mutation";
import { removeUser } from "../../store/User/userSlice";
const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUserMutation = useLogoutUser();

  const handleLogout = () => {
    logoutUserMutation.mutate();
  };

  useEffect(() => {
    if (logoutUserMutation.isSuccess) {
      dispatch(removeUser());
      navigate("/login");
    }
  }, [logoutUserMutation.isSuccess]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="px-8 py-4 w-full flex items-center justify-between">
        {/* First Part */}
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[8rem]" />
        </Link>
        {/* Second Part Desktop Navigation*/}
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-2 text-white font-semibold">
            <PiGlobeLight />
            English
          </button>
          {userInfo ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <Avatar img={userInfo?.photoUrl} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/connection">Connection</Link>
                </li>
                <li>
                  <Link to="/request">Request</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-black text-center font-semibold px-4 py-2 w-full min-w-[90px] rounded-full"
            >
              Log in
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-white text-2xl">
            {isDrawerOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`fixed h-full w-3/4 top-0 right-0 bg-white transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleDrawer}
            className="text-black self-end text-2xl absolute top-4 right-9"
          >
            <HiX />
          </button>
          <div className="flex flex-col items-center gap-4 px-4 mt-24">
            <button className="flex items-center gap-2 text-black font-semibold">
              <PiGlobeLight />
              English
            </button>
            <button className="bg-black text-white font-semibold px-4 py-2 w-3/4 rounded-full">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
