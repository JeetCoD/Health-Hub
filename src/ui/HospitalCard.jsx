import { CgPin } from "react-icons/cg";
import { hospitals } from "../data/hospitals";
import { FaStarHalfAlt } from "react-icons/fa";

function HospitalCard() {
  return (
    <div className="flex flex-col gap-4">
      {hospitals.map((data) => (
        <CardRenderer key={data.name} data={data} />
      ))}
    </div>
  );
}



function CardRenderer({ data }) {
  return (
    <div className="flex flex-row border rounded-lg overflow-hidden p-2 hover:shadow shadow-slate-50/100 hover:ease-linear transition-all justify-between">
      <div className="flex flex-row justify-between">
        <div className="w-24 h-24 overflow-hidden rounded-md">
          <img
            src={data.imageURL}
            alt="Hospital Name"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="ml-4">
          <p className="font-medium text-lg">{data.name}</p>
          <p className="text-md text-gray-500 tracking-tight mt-1">
            {data.description}
          </p>
          <div className="mt-2">
            {data.treatedDiseases.map((el) => (
              <span key={el} className="text-xs rounded text-gray-500 mr-2 border p-1">
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between">
        <span className="inline-flex items-center text-xs gap-1 text-gray-500">
          <CgPin />
          <p>
            {data.location.city}, {data.location.country}{" "}
          </p>
        </span>
        <span className="inline-flex items-center text-xs gap-1 text-gray-500">
          <FaStarHalfAlt /> <p>{data.rating} Ratings</p>
        </span>
        <button className="bg-blue-950 hover:bg-slate-900 transition-all ease-linear rounded-md text-sm font-medium text-white py-1 px-2">
          Book now
        </button>
      </div>
    </div>
  );
}

export default HospitalCard;
