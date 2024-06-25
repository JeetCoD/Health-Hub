import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex left-0 p-2 shadow-sm justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2 font-bold text-2xl ">
        <img width="40" src={logo} href="logo" />
        <p>Health Hub</p>
      </div>
      <span>
        {isSignedIn ? (
          <UserButton className="font-semibold" />
        ) : (
          <SignInButton className="bg-blue-700 py-1 px-4 rounded-md font-semibold text-gray-50 border-t border-blue-900" />
        )}
      </span>
    </div>
  );
}

export default Header;
