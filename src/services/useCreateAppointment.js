import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { createAppointmentsApi } from "./apiAppointments";

export function useCreateAppoitment() {
  const queryClient = useQueryClient();
  const { mutate: createAppointment, isLoading: isCreating } = useMutation({
    mutationFn: createAppointmentsApi,
    onSuccess: () => {
      toast.success("Appointment Sucessfully booked");
      queryClient.invalidateQueries({
        queryKey: ["appointment"],
      });
    },
    onError: () => {
      toast.error("Error while booking appointment");
    },
  });
  return { createAppointment, isCreating };
}
