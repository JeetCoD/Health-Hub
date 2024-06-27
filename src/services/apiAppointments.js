import supabase from "./supabase";

export async function getAppointmentsApi() {
  const { data, error } = await supabase.from("appointments").select("*");
  return data;
}

export async function createAppointmentsApi(userId) {
  const { data, error } = await supabase
    .from("appointments")
    .insert([{ userId }])
    .select();
  return data;
}
