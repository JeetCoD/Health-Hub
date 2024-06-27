import { useMutation, useQueryClient } from "react-query";
import { createUserApi } from "./apiUser";
import toast from "react-hot-toast";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success("Profile Sucessfully created");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: () => {
      toast.error("Error while updating profile");
    },
  });
  return { createUser, isCreating };
}
