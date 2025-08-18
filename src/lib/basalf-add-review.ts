"use server";

import Basalf from "basalf";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function addReview(review: string, projectName: string) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email ?? "anonymous";
  const author = email.includes("@") ? email.split("@")[0] : email;

  const basalf = new Basalf(process.env.BASALF_KEY);
  await basalf
    .from("reviews")
    .where({ id: 1 })
    .insert({ author, review, projectName });
}
