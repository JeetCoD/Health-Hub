import { useParams, useSearchParams } from "react-router-dom";
import { appointmentDescriptions, hospitals } from "../data/hospitals";
import { CgPin } from "react-icons/cg";
import { FaStarHalfAlt } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import { useCreateAppoitment } from "../services/useCreateAppointment";

function HospitalPage() {
  const { hospital } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useUser();

  const { createAppointment, isCreating } = useCreateAppoitment();

  function RemoveSpaceLogic(name) {
    const newName = name.split(" ").join("");
    return newName;
  }

  console.log(user);
  const userId = user?.id;
  function handleBookAppointment() {
    if (user?.id) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("userId", user.id);
      setSearchParams(newSearchParams);
    } else {
      console.log("User not logged in");
      // Handle the case where user is not logged in
    }

    console.log(user.id)
    createAppointment(user?.id);
  }

  const hospitalData = hospitals.find(
    (data) => RemoveSpaceLogic(data.name) === hospital
  );

  return (
    <div className="m-4 h-[88vh] border rounded-md">
      <div className="flex p-4 justify-between">
        <div className="flex">
          <div className="w-52 h-52 rounded overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={hospitalData.imageURL}
            />
          </div>
          <div className="ml-4 flex flex-col ">
            <p className="font-semibold text-3xl">{hospitalData.name}</p>
            <p className="text-md text-gray-500 tracking-tight mt-1">
              {hospitalData.description}
            </p>
            <div className="mt-2">
              <span className="text-xs rounded text-gray-50 mr-2  p-1 uppercase bg-gray-400 font-medium">
                Treatments :
              </span>
              {hospitalData.treatedDiseases.map((el) => (
                <span
                  key={el}
                  className="text-xs rounded text-gray-500 mr-2 border p-1"
                >
                  {el}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <span className="text-xs rounded text-gray-50 mr-2  p-1 uppercase bg-gray-400 font-medium">
                facilities :
              </span>
              {hospitalData.facilities.map((el) => (
                <span
                  key={el}
                  className="text-xs rounded text-gray-500 mr-2 border p-1"
                >
                  {el}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <button
                className="bg-blue-950 hover:bg-slate-900 transition-all ease-linear rounded-md text-md font-medium text-white py-3 px-16 mr-4"
                onClick={() => handleBookAppointment()}
              >
                Book now
              </button>
              <span className="text-xs text-gray-500 mt-2">
                Once the appointment is booked, it can&apos;t be undone.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4  items-end">
          <span className="inline-flex items-center text-xs gap-1 text-gray-500">
            <CgPin />
            <p>
              {hospitalData.location.city}, {hospitalData.location.country}{" "}
            </p>
          </span>
          <span className="inline-flex items-center text-xs gap-1 text-gray-500">
            <FaStarHalfAlt /> <p>{hospitalData.rating} Ratings</p>
          </span>
        </div>
      </div>
      <div className="p-4">
        General appointment information
        <ul>
          {appointmentDescriptions.map((data) => (
            <li key={data.type} className="text-sm text-gray-500 mb-1">
              &gt; {data.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HospitalPage;
