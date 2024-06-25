import { Link } from "react-router-dom";

function NoPageFound() {
  return (
    <div className="flex flex-col text-xl text-gray-900 items-center h-screen  p-8 text-center">
      <p>Opps! Page not found.</p>
      <Link to='/' className="text-sm mt-4 underline underline-offset-4 text-blue-600">Go to Home</Link>
    </div>
  );
}

export default NoPageFound;
