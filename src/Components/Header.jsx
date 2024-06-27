import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
function Header() {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  console.log(location);

  return (
    <div className="flex left-0 p-2 shadow-sm justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2 font-bold text-2xl ">
        <img width="40" src={logo} href="logo" />
        <p>Health Hub</p>
      </div>
      {path === "hospitalAppt" ? (
        <p className="font-bold text-blue-800 capitalize">Doctor Portal</p>
      ) : !isSignedIn ? (
        <SignInButton
          afterSignUpUrl="/app"
          className="bg-blue-700 py-1 px-4 rounded-md font-semibold text-gray-50 border-t border-blue-900"
        />
      ) : (
        <div
          className="cursor-pointer w-8 h-8 rounded-full overflow-hidden"
          onClick={() => navigate("/profile")}
        >
          <img src={user?.imageUrl} />
        </div>
      )}
      {/* <span>
        {isSignedIn ? (
          <UserButton className="font-semibold" />
        ) : (
          <SignInButton className="bg-blue-700 py-1 px-4 rounded-md font-semibold text-gray-50 border-t border-blue-900" />
        )}
      </span> */}
    </div>
  );
}

export default Header;
