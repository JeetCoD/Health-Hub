import { SignIn, SignInButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  if (isSignedIn) {
    return navigate("/");
  }
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <p className="text-gray-800 text-xl font-semibold">To use the Health Hub, you need to sign-in.</p>
     
    </div>
  );
}

export default Login;
