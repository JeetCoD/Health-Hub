import supabase from "./supabase";

export async function getUserData() {
  const { data: users, error } = await supabase.from("users").select("*");
  return users;
}

export async function createUserApi(userData) {
  console.log(userData);
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();

  console.log(data);
  return data;
}
