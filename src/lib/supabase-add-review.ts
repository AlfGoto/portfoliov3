"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default async function addReview(
  author: string,
  review: string,
  projectName: string
) {
  await supabase
    .from("Reviews")
    .insert([{ author, review, projectName }])
    .select();
}
