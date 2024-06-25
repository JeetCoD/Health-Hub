import supabase from "./supabase";

export async function getUserData() {
  const { data: users, error } = await supabase.from("users").select("*");
  return users;
}
