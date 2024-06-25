import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout
