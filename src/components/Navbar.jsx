import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Profile from "../assets/profile.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../redux/user/userSlice";


const Navbar = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(setUsername('Addie Bradford'));
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between p-5">
        <div>
          <div className="font-bold">Dashboard</div>
          <div className="text-gray-500 text-sm">
            Hello, {username}. Welcome to Dashboard.
          </div>
        </div>

        <div className="relative w-1/4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CiSearch className="text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 border rounded-3xl shadow-md w-full"
          />
        </div>

        <div className="relative flex items-center gap-8">
          <IoNotificationsOutline className="h-5 w-5" />
          <div className="relative flex items-center">
            <div className="text-sm">Addie Bradford</div>
            <RiArrowDropDownLine />
            <div className="relative h-6 w-6">
              <img
                src={Profile}
                alt=""
                className="h-full w-full rounded-full"
              />
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
