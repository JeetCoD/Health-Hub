import { Link, NavLink, Outlet } from "react-router-dom";

function ProfileLayout() {
  const getProfileClassName = ({ isActive }) => {
    return `transition-all ${
      isActive
        ? "font-bold text-white px-2 py-1 mr-4 bg-blue-800 rounded"
        : "text-gray-600 hover:text-gray-800 mr-4"
    }`;
  };
  return (
    <div className="p-4">
      <p className="text-2xl font-semibold">Profile Page</p>
      <div className="flex gap-4 capitalize shadow-sm mt-2 rounded-lg mb-6  h-12 items-center pl-4  border-b justify-between">
        <div>
          <NavLink to="userProfile" className={getProfileClassName}>
            Profile
          </NavLink>
          <NavLink to="report" className={getProfileClassName}>
            Report
          </NavLink>
          <NavLink to="account" className={getProfileClassName}>
            Account
          </NavLink>
        </div>
        <Link to="/app" className="mr-4 text-blue-700 font-semibold text-sm">
          Back to Home
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default ProfileLayout;
