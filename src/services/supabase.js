import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yaHdxbnN0aXluZWF2Z2VpeHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMDM2MjMsImV4cCI6MjAzNDc3OTYyM30.a6tuue8nNaFQjb6FpP_QjS7hXL0wK9P1oDbbjSD3ltE";
const supabaseUrl = "https://orhwqnstiyneavgeixxf.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
