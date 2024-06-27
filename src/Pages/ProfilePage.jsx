import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../services/useCreateUser";
import { useQuery } from "react-query";
import { getUserData } from "../services/apiUser";

function ProfilePage() {
  const { user } = useUser();
  const { register, handleSubmit } = useForm();

  const { createUser, isCreating } = useCreateUser();
  const defaultMedicines = [
    "Paracetamol",
    "Ibuprofen",
    "Cetirizine",
    "Amoxicillin",
    "Azithromycin",
  ];

  function onSubmit(data) {
    const newUserData = {
      ...data,
      userId: user.id,
      medicine: defaultMedicines,
    };
    createUser(newUserData);
    console.log(newUserData);
  }
  return (
    <form
      className="flex flex-col border p-4 rounded gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 capitalize items-center">
        <label className="w-28" htmlFor="userName">
          user name{" "}
        </label>
        <input
          defaultValue={user?.fullName}
          {...register("userName")}
          className="p-2 border rounded-md text-gray-600 capitalize"
          placeholder="User name"
          id="userName"
        />
      </div>
      <div className="flex gap-4 capitalize items-center">
        <label className="w-28" htmlFor="age">
          User age{" "}
        </label>
        <input
          {...register("age")}
          type="number"
          className="p-2 border rounded text-gray-600"
          placeholder="User age"
          id="age"
        />
      </div>
      <div className="flex gap-4 capitalize items-center">
        <label className="w-28" htmlFor="phoneNumber">
          Phone number
        </label>
        <input
          type="number"
          {...register("phoneNumber")}
          className="p-2 border rounded text-gray-600"
          placeholder="Phone number"
          id="phoneNumber"
        />
      </div>
      <div className="flex gap-4 capitalize items-center">
        <label className="w-28" htmlFor="bloodGroup">
          Blood Group
        </label>
        <input
          {...register("bloodGroup")}
          className="p-2 border rounded text-gray-600"
          placeholder="Blood group"
          id="bloodGroup"
        />
      </div>
      <div className="flex gap-4 capitalize items-center">
        <label className="w-28" htmlFor="gender">
          Gender{" "}
        </label>
        <input
          {...register("gender")}
          className="p-2 border rounded text-gray-600"
          placeholder="Gender"
          id="gender"
        />
      </div>
      <span>
        <button
          type="submit"
          className="font-semibold text-white px-6 py-2 mr-4 bg-blue-800 rounded-lg"
        >
          Update Profile
        </button>
      </span>
    </form>
  );
}

export default ProfilePage;
