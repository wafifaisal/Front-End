import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pzueurmhxqzqmbhtllfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6dWV1cm1oeHF6cW1iaHRsbGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjY4MTksImV4cCI6MjA0NzA0MjgxOX0.EZapWngTDqO1yrHXEsiUI9mpeUhE3EduLtmPFYMQsBI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
