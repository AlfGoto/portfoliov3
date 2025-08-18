"use server";

import { neon } from "@neondatabase/serverless";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function addReview(review: string, projectName: string) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email ?? "anonymous";
  const author = email.includes("@") ? email.split("@")[0] : email;

  const sql = neon(process.env.DATABASE_URL!);
  await sql(
    "INSERT INTO reviews (author,review,projectName) VALUES ($1, $2, $3)",
    [author, review, projectName]
  );
}
