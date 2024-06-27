import { SignOutButton, UserProfile } from "@clerk/clerk-react";

function Account() {
  return (
    <div>
      <UserProfile
        appearance={{
          elements: {
            rootBox: "w-[100%] ",
            cardBox: "w-[100%]",
          },
        }}
      />
      <div className="font-semibold p-2 px-6 text-sm border border-red-900 hover:shadow-red-700/40 hover:shadow-md transition-all ease-linear bg-red-700 inline-flex text-white w-auto mt-4 rounded-lg">
        <SignOutButton />
      </div>
    </div>
  );
}

export default Account;
