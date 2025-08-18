"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function addReview(review: string, projectName: string) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email ?? "anonymous";
  const author = email.includes("@") ? email.split("@")[0] : email;
  await supabase
    .from("Reviews")
    .insert([{ author, review, projectName }])
    .select();
}
