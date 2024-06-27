import { useQuery } from "react-query";
import { getAppointmentsApi } from "../services/apiAppointments";

function DoctorPage() {
  const { isLoading, data, error } = useQuery({
    queryFn: getAppointmentsApi,
    queryKey: ["appointments"],
  });
  console.log(data);
  return (
    <div className="p-4">
      {data?.map((data) => (
        <AppointmentRender data={data} key={Math.random()} />
      ))}
    </div>
  );
}

function AppointmentRender({ data }) {
  return (
    <div className="flex border p-4 rounded-md justify-between items-center mb-6">
      <div className="flex flex-col">
        <p className="font-medium">New Appointments</p>
        <p className="text-gray-500 text-sm">{data.userId}</p>
      </div>
      <p>Created on {data.bookedAt}</p>
      <button className="font-semibold rounded-md text-blue-600 bg-white p-2 border border-blue-600 hover:border-blue-800 hover:text-blue-800 transition-all ease-linear">
        Appoint
      </button>
    </div>
  );
}

export default DoctorPage;
