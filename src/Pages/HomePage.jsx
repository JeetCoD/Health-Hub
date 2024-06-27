import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUserData } from "../services/apiUser";
import HospitalCard from "../ui/HospitalCard";
import Loading from "../ui/Loading";

function HomePage() {
 
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target[0].value;
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  if (!isSignedIn) {
    return navigate("/sign-in");
  }

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <div className="flex justify-between flex-row mb-4 items-center">
        <h1 className="text-gray-800 text-xl font-semibold capitalize">
          Good day {user?.firstName}!
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg p-2"
          />
        </form>
      </div>
      <HospitalCard />
    </div>
  );
}

export default HomePage;
